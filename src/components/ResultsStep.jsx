import { getMatches } from '../data/courses'
import { getHobbyNote, HOBBIES } from '../data/hobbies'

const EDUCATION_LABELS = {
  '10th': '10th Grade', '12th': '12th Grade', ug: 'Undergraduate', pg: 'Postgraduate'
}
const STREAM_LABELS = {
  science: 'Science', commerce: 'Commerce', arts: 'Arts / Humanities',
  'cs-it-engg': 'CS / IT / Engineering', 'commerce-business': 'Commerce / Business',
  'math-stats-science': 'Math / Stats / Science', 'arts-other': 'Arts / Other',
  'commerce-mba': 'Commerce / MBA'
}
const STRENGTH_STYLES = {
  'Strong Match':    { bg: '#dcfce7', color: '#15803d', dot: '#16a34a' },
  'Good Match':      { bg: '#dbeafe', color: '#1d4ed8', dot: '#3b82f6' },
  'Fair Match':      { bg: '#fef3c7', color: '#92400e', dot: '#d97706' },
  'Explore Further': { bg: '#f1f5f9', color: '#475569', dot: '#94a3b8' }
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
  return `rgba(${r},${g},${b},${alpha})`
}

function calcAvg(marks) {
  if (!marks) return null
  const vals = Object.values(marks).filter(v => v !== '' && !isNaN(parseFloat(v))).map(parseFloat)
  return vals.length > 0 ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null
}

function avgLabel(avg) {
  if (avg >= 80) return 'excellent academic profile'
  if (avg >= 65) return 'strong academic profile'
  if (avg >= 50) return 'solid academic profile'
  return 'developing academic profile'
}

export default function ResultsStep({ education, stream, marks, hobbies, onReset }) {
  const baseMatches = getMatches(education, stream, marks)
  const matches = baseMatches.map(course => ({
    ...course,
    hobbyNote: getHobbyNote(hobbies, course.id)
  }))

  const edLabel     = EDUCATION_LABELS[education] || ''
  const streamLabel = stream ? STREAM_LABELS[stream] : null
  const profileLabel = streamLabel ? `${edLabel} · ${streamLabel}` : edLabel
  const avg         = calcAvg(marks)

  const selectedHobbyLabels = hobbies.length > 0
    ? HOBBIES.filter(h => hobbies.includes(h.id)).map(h => `${h.icon} ${h.label}`)
    : []

  return (
    <div className="fade-in">
      <div className="results-intro">
        <div className="results-intro-label">Your Career Matches</div>
        <div className="results-intro-title">
          {matches.length === 1
            ? "Here's the career that fits your profile"
            : `${matches.length} careers matched to your profile`}
        </div>
        <div className="results-intro-sub">
          {profileLabel}
          {avg !== null && <span className="results-avg-chip"> · {avg}% avg</span>}
        </div>
        {avg !== null && (
          <p className="results-intro-note">
            Based on your {avgLabel(avg)}, here is how each career aligns with your strengths.
            The top result is your strongest fit.
          </p>
        )}
        {selectedHobbyLabels.length > 0 && (
          <div className="results-hobby-chips">
            {selectedHobbyLabels.map(l => (
              <span key={l} className="results-hobby-chip">{l}</span>
            ))}
          </div>
        )}
      </div>

      <div className="course-cards">
        {matches.map((course, i) => (
          <CourseCard key={course.id} course={course} rank={i + 1} isTop={i === 0} />
        ))}
      </div>

      <div className="reset-section">
        <button className="reset-btn" onClick={onReset}>Try a different profile</button>
      </div>
    </div>
  )
}

function CourseCard({ course, rank, isTop }) {
  const bgColor       = hexToRgba(course.accentColor, 0.08)
  const textColor     = course.accentColor
  const strengthStyle = course.matchStrength ? STRENGTH_STYLES[course.matchStrength] : null

  return (
    <div
      className={`course-card ${isTop ? 'top-pick' : ''}`}
      style={isTop ? { '--card-accent': course.accentColor } : {}}
    >
      <div className="course-card-top" style={{ background: course.accentColor }} />
      <div className="course-card-body">

        <div className="course-card-header">
          <div className="course-title-row">
            {isTop && <span className="top-pick-badge">Top Pick</span>}
            <span className="course-title">{course.title}</span>
          </div>
          <div className="course-meta">
            {strengthStyle && (
              <span className="match-badge"
                style={{ background: strengthStyle.bg, color: strengthStyle.color }}>
                <span className="match-dot" style={{ background: strengthStyle.dot }} />
                {course.matchStrength}
              </span>
            )}
            <span className="course-duration-badge">{course.duration}</span>
          </div>
        </div>

        {course.score !== null && (
          <div className="score-bar-container">
            <div className="score-bar-fill"
              style={{ width: `${Math.min(course.score, 100)}%`, background: course.accentColor }} />
          </div>
        )}

        <div className="course-tagline">{course.tagline}</div>

        {course.whyItFitsYou && (
          <div className="why-box" style={{ background: bgColor }}>
            <div className="why-box-label" style={{ color: textColor }}>Why this fits you</div>
            <div className="why-box-text" style={{ color: textColor }}>{course.whyItFitsYou}</div>
          </div>
        )}

        {course.hobbyNote && (
          <div className="hobby-note-box">
            <span className="hobby-note-icon">🎯</span>
            <span className="hobby-note-text">{course.hobbyNote}</span>
          </div>
        )}

        <div className="course-section">
          <div className="course-section-label">Career Roles</div>
          <div className="tag-list">
            {course.careerRoles.map(role => (
              <span key={role} className="tag role">{role}</span>
            ))}
          </div>
        </div>

        <div className="course-section">
          <div className="course-section-label">Skills Covered</div>
          <div className="tag-list">
            {course.skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="course-schedule">
          <span>🗓</span>
          <span>{course.schedule}</span>
        </div>
      </div>
    </div>
  )
}
