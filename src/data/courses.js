export const COURSES = {
  'data-science': {
    id: 'data-science',
    title: 'Data Science',
    duration: '8 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Build intelligent systems from raw data',
    skills: ['Python', 'R', 'SQL', 'EDA', 'Machine Learning', 'Deep Learning', 'NLP', 'Tableau', 'Power BI', 'Computer Vision', 'Hadoop', 'Apache Spark'],
    careerRoles: ['Data Scientist', 'ML Engineer', 'AI Engineer', 'Research Analyst'],
    accentColor: '#6366f1'
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics',
    duration: '7 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Turn numbers into decisions',
    skills: ['Python', 'R', 'SQL', 'EDA', 'Machine Learning', 'Tableau', 'Power BI', 'Web Scraping', 'Excel'],
    careerRoles: ['Data Analyst', 'BI Analyst', 'Reporting Analyst', 'MIS Executive'],
    accentColor: '#8b5cf6'
  },
  'python-fullstack': {
    id: 'python-fullstack',
    title: 'Python Full Stack',
    duration: '7 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Build complete web applications end-to-end',
    skills: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'React'],
    careerRoles: ['Full Stack Developer', 'Python Developer', 'Backend Developer', 'Web Developer'],
    accentColor: '#3b82f6'
  },
  'mern-stack': {
    id: 'mern-stack',
    title: 'MERN Stack',
    duration: '7 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Master JavaScript from browser to server',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    careerRoles: ['MERN Stack Developer', 'Frontend Developer', 'Node.js Developer', 'Full Stack Developer'],
    accentColor: '#10b981'
  },
  'business-analytics': {
    id: 'business-analytics',
    title: 'Business Analytics',
    duration: '5 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Bridge the gap between business and data',
    skills: ['Python', 'R', 'SQL', 'Tableau', 'Excel', 'Power BI', 'Statistics', 'Agile', 'Scrum', 'Jira', 'Trello'],
    careerRoles: ['Business Analyst', 'Product Analyst', 'Scrum Master', 'Operations Analyst'],
    accentColor: '#f59e0b'
  },
  'software-testing': {
    id: 'software-testing',
    title: 'Software Testing',
    duration: '3 months',
    schedule: '5 days/week · 2–3 hrs/day',
    tagline: 'Ensure quality at every step of the software lifecycle',
    skills: ['Manual Testing', 'Automation Testing', 'Jira', 'Cucumber', 'JMeter', 'Postman'],
    careerRoles: ['QA Engineer', 'Test Engineer', 'SDET', 'Quality Analyst'],
    accentColor: '#ef4444'
  }
}

const WHY_IT_FITS = {
  '10th__software-testing': "You're at the start of your journey — and Software Testing is the ideal entry point into tech. No prior coding experience needed. It's logical, structured, and gets you job-ready in just 3 months.",

  '12th-science__python-fullstack': "Your science foundation — the logical thinking, problem-solving mindset — translates directly into full-stack development. Python Full Stack will take you from zero to building complete web applications.",
  '12th-science__mern-stack': "With a science background, picking up JavaScript comes naturally. MERN Stack puts you on a direct path to building modern web applications that companies actually use.",
  '12th-science__software-testing': "Software Testing is a structured, analytical discipline. Your science training has already built the systematic thinking this career demands.",

  '12th-commerce__business-analytics': "Commerce is the perfect launchpad for Business Analytics. You already understand business concepts — now you'll add data skills like Tableau, Excel, and Agile to become a data-driven decision-maker.",
  '12th-commerce__software-testing': "No coding background needed for Software Testing. Your commerce training in documentation, process thinking, and attention to detail is a genuine advantage here.",

  '12th-arts__software-testing': "Software Testing is built on clear thinking and structured documentation — skills that arts students often excel at. It's the fastest, most accessible path into the tech industry.",

  'ug-cs-it-engg__data-science': "Your engineering and CS fundamentals are the strongest possible base for Data Science. You're already comfortable with algorithms and math — ML, deep learning, and AI are the natural next step.",
  'ug-cs-it-engg__python-fullstack': "CS grads who go full-stack are among the most hireable profiles in tech. Python + Django on the backend, React on the frontend — you'll ship production-ready applications.",
  'ug-cs-it-engg__mern-stack': "MERN Stack aligns naturally with CS training. Node.js, React, and MongoDB are the backbone of thousands of modern products — and employers know it.",

  'ug-commerce-business__business-analytics': "Your commerce degree gives you something most data professionals lack: genuine business intuition. Combined with Python, Tableau, and Agile skills, you'll speak both languages fluently — data and business.",
  'ug-commerce-business__data-analytics': "Data roles in BFSI, consulting, and marketing are in high demand — and companies specifically look for profiles who understand business context. Your background is a built-in edge.",

  'ug-math-stats-science__data-science': "A mathematics or statistics degree is the closest thing to a cheat code for Data Science. Statistical modelling, ML algorithms, and AI research — you already have the foundation. This course connects the dots.",
  'ug-math-stats-science__data-analytics': "Your quantitative training means you'll go deeper than most analysts ever do. SQL, Python, and visualisation tools will give your analytical mindset a direct path to business impact.",

  'ug-arts-other__software-testing': "Software Testing rewards sharp thinking, structured documentation, and fresh eyes — qualities that cross-discipline backgrounds often bring. No prior coding required, and placement rates are strong.",
  'ug-arts-other__business-analytics': "Business Analytics is less about code and more about insight. Agile, Scrum, Jira, Excel, Tableau — these are tools any analytical mind can master, regardless of academic background.",

  'pg-cs-it-engg__data-science': "At the postgraduate level, Data Science positions you for senior roles — ML research, AI engineering, or data leadership. Your advanced technical foundation means you'll go further, faster.",
  'pg-cs-it-engg__python-fullstack': "Postgraduate CS professionals who go full-stack are well-positioned for senior developer, tech lead, or architect roles. Python Full Stack gives you end-to-end product ownership.",

  'pg-commerce-mba__business-analytics': "An MBA combined with Business Analytics makes you a rare profile — someone who can drive strategy with data. Scrum Master, Product Analyst, and Senior BA roles are a natural fit.",
  'pg-commerce-mba__data-analytics': "Postgraduate business professionals with data skills are in demand at consultancies, banks, and product companies. This course turns your strategic thinking into a quantifiable advantage.",

  'pg-math-stats-science__data-science': "A postgraduate in Mathematics or Statistics is the academic gold standard for Data Science. You'll move into research, quant roles, or senior ML engineering with a strong foundation others take years to build.",
  'pg-math-stats-science__data-analytics': "Advanced quantitative skills combined with industry tools like Python, Tableau, and SQL put you in a strong position for senior analyst or data science transition roles.",

  'pg-arts-other__business-analytics': "With postgraduate-level research and analytical skills, Business Analytics becomes a credible pivot into tech. Agile, data visualisation, and business strategy tools are well within reach.",
  'pg-arts-other__software-testing': "Software Testing rewards methodical thinking and clear documentation — skills that postgraduate humanities and social science backgrounds excel at. A strong, practical entry into the tech workforce."
}

// Subject input fields per education+stream key
export const SUBJECT_DEFINITIONS = {
  '10th': [
    { id: 'maths',     label: 'Mathematics',       required: true },
    { id: 'science',   label: 'Science',            required: true },
    { id: 'english',   label: 'English',            required: true },
    { id: 'social',    label: 'Social Studies',     required: true },
    { id: 'computer',  label: 'Computer Science',   required: false },
    { id: 'language2', label: '2nd Language',       required: false }
  ],
  '12th-science': [
    { id: 'physics',   label: 'Physics',            required: true },
    { id: 'chemistry', label: 'Chemistry',          required: true },
    { id: 'english',   label: 'English',            required: true },
    { id: 'maths',     label: 'Mathematics',        required: false },
    { id: 'biology',   label: 'Biology',            required: false },
    { id: 'computer',  label: 'Computer Science',   required: false }
  ],
  '12th-commerce': [
    { id: 'accountancy', label: 'Accountancy',            required: true },
    { id: 'business',    label: 'Business Studies',       required: true },
    { id: 'economics',   label: 'Economics',              required: true },
    { id: 'english',     label: 'English',                required: true },
    { id: 'maths',       label: 'Mathematics / Statistics', required: false }
  ],
  '12th-arts': [
    { id: 'english',    label: 'English',            required: true },
    { id: 'history',    label: 'History',            required: false },
    { id: 'geography',  label: 'Geography',          required: false },
    { id: 'polsci',     label: 'Political Science',  required: false },
    { id: 'economics',  label: 'Economics',          required: false },
    { id: 'psychology', label: 'Psychology',         required: false }
  ],
  'ug-cs-it-engg': [
    { id: 'programming', label: 'Core Programming',           required: true },
    { id: 'dsa',         label: 'Data Structures & Algorithms', required: true },
    { id: 'dbms',        label: 'Database Management',        required: true },
    { id: 'maths',       label: 'Engineering Mathematics',    required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true }
  ],
  'ug-commerce-business': [
    { id: 'accounting',  label: 'Financial Accounting',       required: true },
    { id: 'economics',   label: 'Economics',                  required: true },
    { id: 'statistics',  label: 'Business Statistics',        required: true },
    { id: 'management',  label: 'Management / Marketing',     required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true }
  ],
  'ug-math-stats-science': [
    { id: 'maths',       label: 'Mathematics / Calculus',     required: true },
    { id: 'statistics',  label: 'Statistics / Probability',   required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true },
    { id: 'programming', label: 'Programming (if studied)',   required: false },
    { id: 'physics',     label: 'Physics (if studied)',       required: false }
  ],
  'ug-arts-other': [
    { id: 'english',     label: 'English / Communication',    required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true }
  ],
  'pg-cs-it-engg': [
    { id: 'core',        label: 'Core Technical Subject',     required: true },
    { id: 'maths',       label: 'Advanced Mathematics',       required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true },
    { id: 'research',    label: 'Research / Thesis Score',    required: false }
  ],
  'pg-commerce-mba': [
    { id: 'management',  label: 'Management / Strategy',      required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true },
    { id: 'finance',     label: 'Finance / Accounting',       required: false },
    { id: 'marketing',   label: 'Marketing / Operations',     required: false }
  ],
  'pg-math-stats-science': [
    { id: 'maths',       label: 'Advanced Mathematics',       required: true },
    { id: 'statistics',  label: 'Statistical Methods',        required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true },
    { id: 'programming', label: 'Programming (if studied)',   required: false }
  ],
  'pg-arts-other': [
    { id: 'english',     label: 'English / Communication',    required: true },
    { id: 'overall',     label: 'Overall % (or CGPA × 10)',   required: true },
    { id: 'research',    label: 'Research / Analysis Score',  required: false }
  ]
}

// Scoring weights per education+stream key → course id
// Only subjects from the corresponding SUBJECT_DEFINITIONS entry are used
export const SCORING_RULES = {
  '10th': {
    'software-testing': { maths: 0.2, science: 0.2, english: 0.35, social: 0.1, computer: 0.15 }
  },
  '12th-science': {
    'python-fullstack':  { maths: 0.35, physics: 0.2, computer: 0.3, english: 0.15 },
    'mern-stack':        { computer: 0.4, maths: 0.25, english: 0.2, physics: 0.15 },
    'software-testing':  { english: 0.4, physics: 0.25, chemistry: 0.2, maths: 0.15 }
  },
  '12th-commerce': {
    'business-analytics': { business: 0.3, economics: 0.25, accountancy: 0.25, english: 0.1, maths: 0.1 },
    'software-testing':   { english: 0.5, economics: 0.25, business: 0.25 }
  },
  '12th-arts': {
    'software-testing': { english: 0.6, history: 0.1, polsci: 0.1, geography: 0.1, economics: 0.1 }
  },
  'ug-cs-it-engg': {
    'data-science':     { dsa: 0.3, maths: 0.3, programming: 0.25, dbms: 0.1, overall: 0.05 },
    'python-fullstack': { programming: 0.35, dbms: 0.25, dsa: 0.2, maths: 0.1, overall: 0.1 },
    'mern-stack':       { programming: 0.4, dbms: 0.2, dsa: 0.2, maths: 0.1, overall: 0.1 }
  },
  'ug-commerce-business': {
    'business-analytics': { management: 0.35, statistics: 0.25, economics: 0.2, accounting: 0.15, overall: 0.05 },
    'data-analytics':     { statistics: 0.35, economics: 0.25, accounting: 0.2, management: 0.15, overall: 0.05 }
  },
  'ug-math-stats-science': {
    'data-science':   { maths: 0.35, statistics: 0.35, programming: 0.2, overall: 0.1 },
    'data-analytics': { statistics: 0.4, maths: 0.3, programming: 0.15, overall: 0.15 }
  },
  'ug-arts-other': {
    'software-testing':   { english: 0.7, overall: 0.3 },
    'business-analytics': { english: 0.4, overall: 0.6 }
  },
  'pg-cs-it-engg': {
    'data-science':     { maths: 0.35, core: 0.3, research: 0.2, overall: 0.15 },
    'python-fullstack': { core: 0.45, maths: 0.2, research: 0.1, overall: 0.25 }
  },
  'pg-commerce-mba': {
    'business-analytics': { management: 0.4, finance: 0.25, marketing: 0.2, overall: 0.15 },
    'data-analytics':     { finance: 0.35, management: 0.25, marketing: 0.2, overall: 0.2 }
  },
  'pg-math-stats-science': {
    'data-science':   { maths: 0.35, statistics: 0.4, programming: 0.15, overall: 0.1 },
    'data-analytics': { statistics: 0.45, maths: 0.3, programming: 0.1, overall: 0.15 }
  },
  'pg-arts-other': {
    'business-analytics': { english: 0.3, research: 0.3, overall: 0.4 },
    'software-testing':   { english: 0.5, research: 0.2, overall: 0.3 }
  }
}

export const MATCHING_RULES = {
  '10th': {
    _: ['software-testing']
  },
  '12th': {
    science:  ['python-fullstack', 'mern-stack', 'software-testing'],
    commerce: ['business-analytics', 'software-testing'],
    arts:     ['software-testing']
  },
  ug: {
    'cs-it-engg':       ['data-science', 'python-fullstack', 'mern-stack'],
    'commerce-business': ['business-analytics', 'data-analytics'],
    'math-stats-science': ['data-science', 'data-analytics'],
    'arts-other':        ['software-testing', 'business-analytics']
  },
  pg: {
    'cs-it-engg':        ['data-science', 'python-fullstack'],
    'commerce-mba':      ['business-analytics', 'data-analytics'],
    'math-stats-science': ['data-science', 'data-analytics'],
    'arts-other':        ['business-analytics', 'software-testing']
  }
}

export const STREAMS = {
  '12th': [
    { id: 'science',  label: 'Science',           desc: 'Physics · Chemistry · Maths / Biology' },
    { id: 'commerce', label: 'Commerce',           desc: 'Accounts · Business Studies · Economics' },
    { id: 'arts',     label: 'Arts / Humanities',  desc: 'History · Geography · Political Science' }
  ],
  ug: [
    { id: 'cs-it-engg',        label: 'CS / IT / Engineering',  desc: 'B.E · B.Tech · BCA · B.Sc CS' },
    { id: 'commerce-business', label: 'Commerce / Business',    desc: 'B.Com · BBA · BBM' },
    { id: 'math-stats-science', label: 'Math / Stats / Science', desc: 'B.Sc Maths · Statistics · Physics' },
    { id: 'arts-other',        label: 'Arts / Other',           desc: 'BA · B.Ed · BHM · any other stream' }
  ],
  pg: [
    { id: 'cs-it-engg',        label: 'CS / IT / Engineering',  desc: 'M.E · M.Tech · MCA · M.Sc CS' },
    { id: 'commerce-mba',      label: 'Commerce / MBA',         desc: 'M.Com · MBA · PGDM' },
    { id: 'math-stats-science', label: 'Math / Stats / Science', desc: 'M.Sc Maths · Statistics · Physics' },
    { id: 'arts-other',        label: 'Arts / Other',           desc: 'MA · M.Ed · any other stream' }
  ]
}

function computeScore(marks, weights) {
  let weightedSum = 0
  let totalWeight = 0
  for (const [subject, weight] of Object.entries(weights)) {
    const raw = marks[subject]
    if (raw !== undefined && raw !== '' && !isNaN(parseFloat(raw))) {
      weightedSum += parseFloat(raw) * weight
      totalWeight += weight
    }
  }
  return totalWeight > 0 ? weightedSum / totalWeight : null
}

export function getMatches(educationLevel, stream, marks) {
  const rules = MATCHING_RULES[educationLevel]
  if (!rules) return []

  const courseIds = educationLevel === '10th' ? rules['_'] : (rules[stream] || [])
  const keyPrefix = educationLevel === '10th' ? educationLevel : `${educationLevel}-${stream}`
  const scoringMap = SCORING_RULES[keyPrefix] || {}

  const results = courseIds.map(id => {
    const course = COURSES[id]
    const weights = scoringMap[id]
    const score = weights && marks ? computeScore(marks, weights) : null

    let matchStrength = null
    if (score !== null) {
      if (score >= 75)      matchStrength = 'Strong Match'
      else if (score >= 60) matchStrength = 'Good Match'
      else if (score >= 45) matchStrength = 'Fair Match'
      else                  matchStrength = 'Explore Further'
    }

    return {
      ...course,
      whyItFitsYou: WHY_IT_FITS[`${keyPrefix}__${id}`] || '',
      score,
      matchStrength
    }
  })

  return results.sort((a, b) => {
    if (a.score === null && b.score === null) return 0
    if (a.score === null) return 1
    if (b.score === null) return -1
    return b.score - a.score
  })
}
