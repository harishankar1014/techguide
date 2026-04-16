import { useState } from 'react'
import { HOBBIES, getPersonalityInsight } from '../data/hobbies'

export default function HobbyStep({ onSubmit, onBack, stepLabel }) {
  const [selected, setSelected] = useState([])

  function toggle(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const insight = getPersonalityInsight(selected)

  return (
    <div className="fade-in">
      <div className="step-heading">
        <div className="step-label">{stepLabel} · Your Interests</div>
        <h1 className="step-title">What do you enjoy outside of studying?</h1>
        <p className="step-subtitle">
          Your marks tell us what you're good at. Your hobbies tell us what kind
          of work you'll actually stay engaged with. Pick everything that resonates
          — there are no wrong answers here.
        </p>
      </div>

      <div className="hobby-grid">
        {HOBBIES.map(h => (
          <button
            key={h.id}
            className={`hobby-card ${selected.includes(h.id) ? 'selected' : ''}`}
            onClick={() => toggle(h.id)}
            type="button"
          >
            <span className="hobby-icon">{h.icon}</span>
            <span className="hobby-label">{h.label}</span>
            <span className="hobby-desc">{h.desc}</span>
            {selected.includes(h.id) && <span className="hobby-check">✓</span>}
          </button>
        ))}
      </div>

      {insight && (
        <div className="hobby-insight">
          <div className="hobby-insight-emoji">💬</div>
          <p className="hobby-insight-text">{insight}</p>
        </div>
      )}

      {!insight && selected.length > 0 && selected.length < 2 && (
        <p className="hobby-nudge">Pick a couple more to get a read on your profile.</p>
      )}

      <div className="hobby-actions">
        {selected.length > 0 ? (
          <button className="analyze-btn" onClick={() => onSubmit(selected)}>
            Continue with {selected.length} interest{selected.length !== 1 ? 's' : ''} →
          </button>
        ) : (
          <button className="analyze-btn btn-outline" onClick={() => onSubmit([])}>
            Skip this step →
          </button>
        )}
      </div>

      <button className="back-btn" onClick={onBack}>← Back</button>
    </div>
  )
}
