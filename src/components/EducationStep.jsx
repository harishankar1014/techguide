const EDUCATION_OPTIONS = [
  {
    id: '10th',
    icon: '📚',
    label: '10th Grade',
    desc: 'Completed Class 10 · SSC / CBSE / ICSE'
  },
  {
    id: '12th',
    icon: '🎓',
    label: '12th Grade',
    desc: 'Completed Class 12 · PUC or equivalent'
  },
  {
    id: 'ug',
    icon: '🏛️',
    label: 'Undergraduate',
    desc: "Bachelor's degree · B.E, B.Tech, B.Com, BA…"
  },
  {
    id: 'pg',
    icon: '🔬',
    label: 'Postgraduate',
    desc: "Master's or MBA · M.Tech, M.Sc, PGDM…"
  }
]

export default function EducationStep({ onSelect }) {
  return (
    <div className="fade-in">
      <div className="hero">
        <div className="hero-eyebrow">Free career guidance · No sign-up needed</div>
        <h1 className="hero-title">Which tech career is right for you?</h1>
        <p className="hero-sub">
          Share your education and marks. We'll match you to the careers that suit your
          academic strengths — and explain exactly why each one fits.
        </p>

        <div className="how-it-works">
          <div className="hiw-step">
            <span className="hiw-num">1</span>
            <span>Select your education</span>
          </div>
          <span className="hiw-sep">›</span>
          <div className="hiw-step">
            <span className="hiw-num">2</span>
            <span>Enter your marks</span>
          </div>
          <span className="hiw-sep">›</span>
          <div className="hiw-step">
            <span className="hiw-num">3</span>
            <span>See your matches</span>
          </div>
        </div>
      </div>

      <div className="step-heading" style={{ marginBottom: 20 }}>
        <div className="step-label">Step 1 · Education Level</div>
        <h2 className="step-title" style={{ fontSize: 22 }}>
          What is your highest qualification?
        </h2>
      </div>

      <div className="selection-grid cols-4">
        {EDUCATION_OPTIONS.map(opt => (
          <button
            key={opt.id}
            className="sel-card"
            onClick={() => onSelect(opt.id)}
          >
            <div className="sel-card-icon">{opt.icon}</div>
            <div className="sel-card-label">{opt.label}</div>
            <div className="sel-card-desc">{opt.desc}</div>
            <div className="sel-card-arrow">Select →</div>
          </button>
        ))}
      </div>
    </div>
  )
}
