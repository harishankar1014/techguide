import { useState, useMemo } from 'react'
import { SUBJECT_DEFINITIONS } from '../data/courses'

export default function MarksStep({ education, stream, onSubmit, onBack, stepLabel }) {
  const subjectKey = education === '10th' ? '10th' : `${education}-${stream}`
  const subjects = SUBJECT_DEFINITIONS[subjectKey] || []

  const [marks, setMarks] = useState(() =>
    Object.fromEntries(subjects.map(s => [s.id, '']))
  )
  const [errors, setErrors] = useState({})

  const liveAvg = useMemo(() => {
    const vals = Object.values(marks)
      .filter(v => v !== '' && !isNaN(parseFloat(v)))
      .map(parseFloat)
    return vals.length > 0
      ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)
      : null
  }, [marks])

  const requiredFilled = subjects
    .filter(s => s.required)
    .every(s => marks[s.id] !== '' && marks[s.id] !== undefined)

  function handleChange(id, value) {
    setMarks(prev => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: null }))
  }

  function validate() {
    const newErrors = {}
    for (const s of subjects) {
      const val = marks[s.id]
      if (s.required && (val === '' || val === undefined)) {
        newErrors[s.id] = 'Required'
      } else if (val !== '' && val !== undefined) {
        const num = parseFloat(val)
        if (isNaN(num) || num < 0 || num > 100) {
          newErrors[s.id] = 'Enter a value between 0 and 100'
        }
      }
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    onSubmit(marks)
  }

  const required = subjects.filter(s => s.required)
  const optional = subjects.filter(s => !s.required)

  return (
    <div className="fade-in">
      <div className="step-heading">
        <div className="step-label">{stepLabel} · Your Marks</div>
        <h1 className="step-title">How did you score in your subjects?</h1>
        <p className="step-subtitle">
          Your marks are used to rank which career suits you best — not to
          judge you. Fill in what you can; optional subjects improve accuracy.
        </p>
      </div>

      {liveAvg !== null && (
        <div className="live-avg">
          <div>
            <div className="live-avg-label">Your average so far</div>
            <div className="live-avg-score">{liveAvg}<span className="live-avg-unit"> / 100</span></div>
          </div>
          <div className="live-avg-bar">
            <div className="live-avg-fill" style={{ width: `${liveAvg}%` }} />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {required.length > 0 && (
          <div className="marks-section">
            <div className="marks-section-label">Required subjects</div>
            <div className="marks-grid">
              {required.map(s => (
                <SubjectField
                  key={s.id}
                  subject={s}
                  value={marks[s.id]}
                  error={errors[s.id]}
                  onChange={val => handleChange(s.id, val)}
                />
              ))}
            </div>
          </div>
        )}

        {optional.length > 0 && (
          <div className="marks-section">
            <div className="marks-section-label">
              Optional subjects
              <span className="optional-hint"> — improves your match accuracy</span>
            </div>
            <div className="marks-grid">
              {optional.map(s => (
                <SubjectField
                  key={s.id}
                  subject={s}
                  value={marks[s.id]}
                  error={errors[s.id]}
                  onChange={val => handleChange(s.id, val)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="marks-actions">
          <button
            type="submit"
            className={`analyze-btn ${!requiredFilled ? 'btn-disabled' : ''}`}
            disabled={!requiredFilled}
          >
            Show my career matches →
          </button>
          {!requiredFilled && (
            <div className="btn-hint">Fill in the required subjects above to continue</div>
          )}
        </div>
      </form>

      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
    </div>
  )
}

function SubjectField({ subject, value, error, onChange }) {
  const num = parseFloat(value)
  const isGood = !isNaN(num) && num >= 60
  const isOk   = !isNaN(num) && num >= 45 && num < 60
  const isLow  = !isNaN(num) && num < 45

  return (
    <div className={`subject-field ${error ? 'has-error' : ''} ${isGood ? 'is-good' : ''} ${isOk ? 'is-ok' : ''} ${isLow ? 'is-low' : ''}`}>
      <label className="subject-label">
        {subject.label}
        {subject.required && <span className="required-dot">*</span>}
      </label>
      <input
        type="number"
        className="subject-input"
        min="0"
        max="100"
        placeholder={subject.required ? '0 – 100' : 'N/A'}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {error && <div className="field-error">{error}</div>}
    </div>
  )
}
