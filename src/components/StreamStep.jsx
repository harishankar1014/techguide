import { STREAMS } from '../data/courses'

const EDUCATION_LABELS = {
  '12th': '12th Grade',
  ug: 'Undergraduate',
  pg: 'Postgraduate'
}

const STREAM_ICONS = {
  science:             '🧪',
  commerce:            '📊',
  arts:                '🎨',
  'cs-it-engg':        '💻',
  'commerce-business': '💼',
  'math-stats-science': '📐',
  'arts-other':        '🌐',
  'commerce-mba':      '💼'
}

export default function StreamStep({ education, onSelect, onBack }) {
  const streams = STREAMS[education] || []
  const edLabel = EDUCATION_LABELS[education] || ''
  const cols = streams.length === 3 ? 'cols-3' : 'cols-2'

  return (
    <div className="fade-in">
      <div className="step-heading">
        <div className="step-label">Step 2 · Your Stream</div>
        <h1 className="step-title">What did you study in {edLabel}?</h1>
        <p className="step-subtitle">
          Your field of study is the strongest signal for which career your
          background translates into most naturally. Pick the closest match.
        </p>
      </div>

      <div className={`selection-grid ${cols}`}>
        {streams.map(s => (
          <button
            key={s.id}
            className="sel-card"
            onClick={() => onSelect(s.id)}
          >
            <div className="sel-card-icon">{STREAM_ICONS[s.id] || '📖'}</div>
            <div className="sel-card-label">{s.label}</div>
            <div className="sel-card-desc">{s.desc}</div>
            <div className="sel-card-arrow">Select →</div>
          </button>
        ))}
      </div>

      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
    </div>
  )
}
