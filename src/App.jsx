import { useState } from 'react'
import EducationStep from './components/EducationStep'
import StreamStep    from './components/StreamStep'
import HobbyStep     from './components/HobbyStep'
import MarksStep     from './components/MarksStep'
import ResultsStep   from './components/ResultsStep'
import './App.css'

// step 0 = education
// step 1 = stream  (skip for 10th → jump to 2)
// step 2 = hobbies
// step 3 = marks
// step 4 = results

function getProgress(step, education) {
  if (!education || step === 0) return 0
  if (education === '10th') {
    return ({ 2: 33, 3: 66, 4: 100 })[step] ?? 0
  }
  return ({ 1: 25, 2: 50, 3: 75, 4: 100 })[step] ?? 0
}

export default function App() {
  const [step,      setStep]      = useState(0)
  const [education, setEducation] = useState(null)
  const [stream,    setStream]    = useState(null)
  const [hobbies,   setHobbies]   = useState([])
  const [marks,     setMarks]     = useState(null)

  function handleEducationSelect(value) {
    setEducation(value); setStream(null); setHobbies([]); setMarks(null)
    setStep(value === '10th' ? 2 : 1)
  }

  function handleStreamSelect(value) {
    setStream(value); setHobbies([]); setMarks(null)
    setStep(2)
  }

  function handleHobbiesSubmit(selected) {
    setHobbies(selected); setMarks(null)
    setStep(3)
  }

  function handleMarksSubmit(submittedMarks) {
    setMarks(submittedMarks)
    setStep(4)
  }

  function handleReset() {
    setStep(0); setEducation(null); setStream(null); setHobbies([]); setMarks(null)
  }

  const hobbyStepLabel = education === '10th' ? 'Step 2 of 3' : 'Step 3 of 4'
  const marksStepLabel = education === '10th' ? 'Step 3 of 3' : 'Step 4 of 4'

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">TechGuide</span>
          </div>
          {step > 0 && (
            <button className="restart-btn" onClick={handleReset}>Start over</button>
          )}
        </div>
      </header>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${getProgress(step, education)}%` }} />
      </div>

      <main className="app-main">
        {step === 0 && <EducationStep onSelect={handleEducationSelect} />}

        {step === 1 && (
          <StreamStep
            education={education}
            onSelect={handleStreamSelect}
            onBack={() => setStep(0)}
          />
        )}

        {step === 2 && (
          <HobbyStep
            onSubmit={handleHobbiesSubmit}
            onBack={() => setStep(education === '10th' ? 0 : 1)}
            stepLabel={hobbyStepLabel}
          />
        )}

        {step === 3 && (
          <MarksStep
            education={education}
            stream={stream}
            onSubmit={handleMarksSubmit}
            onBack={() => setStep(2)}
            stepLabel={marksStepLabel}
          />
        )}

        {step === 4 && (
          <ResultsStep
            education={education}
            stream={stream}
            marks={marks}
            hobbies={hobbies}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  )
}
