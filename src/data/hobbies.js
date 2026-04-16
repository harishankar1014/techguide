export const HOBBIES = [
  { id: 'gaming',       icon: '🎮', label: 'Gaming',             desc: 'Video games, strategy, mobile' },
  { id: 'building',     icon: '🔧', label: 'Building Things',    desc: 'DIY projects, tinkering, making' },
  { id: 'puzzles',      icon: '🧩', label: 'Puzzles & Logic',    desc: 'Sudoku, brain teasers, riddles' },
  { id: 'finance',      icon: '📈', label: 'Finance & Numbers',  desc: 'Investing, budgets, markets' },
  { id: 'design',       icon: '🎨', label: 'Design & Creativity','desc': 'Art, photography, visual work' },
  { id: 'tech',         icon: '💡', label: 'Tech & Gadgets',     desc: 'New apps, tech news, reviews' },
  { id: 'social-media', icon: '📱', label: 'Social Media',       desc: 'Content creation, trends, communities' },
  { id: 'reading',      icon: '📚', label: 'Reading & Research', desc: 'Books, articles, deep dives' },
  { id: 'sports',       icon: '⚽', label: 'Sports & Fitness',   desc: 'Playing or following sports' },
  { id: 'music',        icon: '🎵', label: 'Music',              desc: 'Listening, playing, creating' },
  { id: 'cooking',      icon: '🍳', label: 'Cooking & Science',  desc: 'Experimenting with recipes' },
  { id: 'teaching',     icon: '💬', label: 'Teaching & Talking', desc: 'Explaining things, mentoring others' }
]

const PERSONALITY_TYPES = {
  builder: {
    hobbies: ['gaming', 'building', 'tech'],
    insight: "You're a builder — someone who gets energy from making and tinkering. Hands-on tech roles, where you ship things people actually use, will keep you the most engaged."
  },
  analyst: {
    hobbies: ['puzzles', 'finance', 'reading', 'cooking'],
    insight: "You have an analytical mind. You enjoy understanding patterns and figuring out why things work the way they do. Careers in data and analytics tend to be a natural home for people like you."
  },
  creative: {
    hobbies: ['design', 'music', 'cooking'],
    insight: "You have a creative streak — and tech has more room for that than most people realise. Frontend development and product-adjacent roles tend to suit this profile well."
  },
  connector: {
    hobbies: ['social-media', 'sports', 'teaching'],
    insight: "You're a communicator and a connector. Roles that bridge people and data — like Business Analytics — tend to be the most fulfilling for people with your energy."
  }
}

export function getPersonalityInsight(selectedIds) {
  if (selectedIds.length < 2) return null
  const scores = {}
  for (const [type, config] of Object.entries(PERSONALITY_TYPES)) {
    scores[type] = selectedIds.filter(id => config.hobbies.includes(id)).length
  }
  const [topType, topScore] = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
  if (topScore === 0) {
    return "You've got a genuinely well-rounded set of interests — that's an advantage in most tech roles, not a liability."
  }
  return PERSONALITY_TYPES[topType].insight
}

// Per hobby → which courses it signals, and what to say on the result card
const HOBBY_SIGNALS = {
  gaming: [
    { course: 'software-testing', note: "Gamers are natural testers — you already spend time noticing when something doesn't work as intended." },
    { course: 'mern-stack',       note: "Gaming communities have massive web presence. Building the platforms behind them is a real, growing career." }
  ],
  building: [
    { course: 'python-fullstack', note: "You like building things — Python Full Stack gives you the tools to build complete web products from scratch." },
    { course: 'mern-stack',       note: "MERN gives you end-to-end control over what you create. People who enjoy making things find this deeply satisfying." }
  ],
  puzzles: [
    { course: 'data-science',     note: "Data Science is fundamentally about finding patterns in complex problems — the same instinct you use to solve puzzles." },
    { course: 'software-testing', note: "Finding bugs is a puzzle. Your brain is already wired for the thinking this career requires." }
  ],
  finance: [
    { course: 'data-analytics',     note: "Your financial curiosity translates directly — Data Analytics is heavily used in BFSI, FinTech, and investment firms." },
    { course: 'business-analytics', note: "Business Analytics is built on the same pattern-recognition you apply when tracking numbers and markets." }
  ],
  'social-media': [
    { course: 'business-analytics', note: "Every platform you use is driven by analytics. Business Analytics teaches you what's actually happening behind those metrics." },
    { course: 'data-analytics',     note: "Social media is the world's largest dataset. Data Analytics gives you the tools to make sense of it professionally." }
  ],
  design: [
    { course: 'mern-stack',       note: "Design sense is a superpower in frontend development. MERN Stack lets your eye for UI become a career." },
    { course: 'python-fullstack', note: "Web development is where design meets code — this course covers both the visual and technical sides." }
  ],
  tech: [
    { course: 'data-science',     note: "If you follow tech trends, you know AI and ML dominate the conversation. This course takes you from observer to builder." },
    { course: 'mern-stack',       note: "Curiosity about how apps are built is exactly the mindset that makes a great developer." }
  ],
  reading: [
    { course: 'business-analytics', note: "Reading widely gives you context that most data people lack — it makes you a much stronger Business Analyst." },
    { course: 'software-testing',   note: "Testers write and review a lot of documentation. A sharp reading habit is genuinely useful here." }
  ],
  sports: [
    { course: 'data-analytics',     note: "Sports analytics is one of the fastest-growing fields. The same frameworks apply to business, marketing, and operations." },
    { course: 'business-analytics', note: "You understand teams and performance under pressure — Business Analytics applies that same thinking to organisations and data." }
  ],
  music: [
    { course: 'mern-stack',       note: "Music and programming share a surprising structural logic. Many developers say their musical background helped them think in patterns." },
    { course: 'python-fullstack', note: "Creative thinking is an underrated edge in development. It helps you build products people actually want to use." }
  ],
  cooking: [
    { course: 'data-science',   note: "Cooking is about process, hypothesis, and iteration — the same mindset that drives building good machine learning models." },
    { course: 'data-analytics', note: "Experimentation is at the heart of both cooking and analytics. You adjust, test, and refine until something works." }
  ],
  teaching: [
    { course: 'business-analytics', note: "Business Analysts spend most of their time translating data into stories for stakeholders — exactly what you do when you teach." },
    { course: 'software-testing',   note: "QA engineers document everything and often mentor junior developers. If you enjoy helping others understand things, this fits." }
  ]
}

export function getHobbyNote(hobbies, courseId) {
  if (!hobbies || hobbies.length === 0) return null
  for (const hobbyId of hobbies) {
    const signals = HOBBY_SIGNALS[hobbyId] || []
    const match = signals.find(s => s.course === courseId)
    if (match) return match.note
  }
  return null
}
