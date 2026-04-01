// LaunchModel - Questions & Scoring Data
// Business Models: PB = Personal Brand, AA = Amazon/Affiliate, DP = Digital Products, CO = Coaching/Consulting

export const questions = [
  {
    id: "Q1",
    question: "What is your primary goal for starting an online business?",
    options: [
      { value: "A", label: "Make money as soon as possible" },
      { value: "B", label: "Build passive or semi-passive income over time" },
      { value: "C", label: "Create an independent income stream with flexibility and autonomy" },
      { value: "D", label: "Build a scalable business with long-term growth potential" },
    ],
  },
  {
    id: "Q2",
    question: "How much time can you realistically dedicate each week?",
    options: [
      { value: "A", label: "Less than 5 hours" },
      { value: "B", label: "5–15 hours" },
      { value: "C", label: "15–30 hours" },
      { value: "D", label: "30+ hours" },
    ],
  },
  {
    id: "Q3",
    question: "How comfortable are you with risk?",
    options: [
      { value: "A", label: "I want the safest, most predictable option" },
      { value: "B", label: "I'm comfortable with calculated risk" },
      { value: "C", label: "I'm willing to accept high uncertainty for higher upside" },
    ],
  },
  {
    id: "Q4",
    question: "What is your starting budget?",
    options: [
      { value: "A", label: "$0–$500" },
      { value: "B", label: "$500–$1,500" },
      { value: "C", label: "$1,500–$3,000+" },
    ],
  },
  {
    id: "Q5",
    question: "Are you open to building a personal brand or being on camera?",
    options: [
      { value: "A", label: "Yes — I'm comfortable being on camera" },
      { value: "B", label: "Maybe — I'm open but nervous" },
      { value: "C", label: "No — I prefer staying behind the scenes" },
    ],
  },
  {
    id: "Q6",
    question: "Do you want to work directly with clients or customers?",
    options: [
      { value: "A", label: "Yes — I'm open to direct client work" },
      { value: "B", label: "Maybe — depending on the opportunity" },
      { value: "C", label: "No — I want minimal direct interaction" },
    ],
  },
  {
    id: "Q7",
    question: "Which activities do you enjoy most or want to learn?",
    options: [
      { value: "A", label: "Writing, research, or strategy" },
      { value: "B", label: "Video creation or editing" },
      { value: "C", label: "Talking to people, selling, or closing deals" },
      { value: "D", label: "Building systems, automating, or technical work" },
    ],
  },
  {
    id: "Q8",
    question: "If someone gave you $1,000 to start a business, what would you do first?",
    options: [
      { value: "A", label: "Invest in ads or traffic to test an offer fast" },
      { value: "B", label: "Buy inventory or a course to learn a skill" },
      { value: "C", label: "Build a website or tool to attract organic traffic" },
      { value: "D", label: "Hire someone to do tasks I don't want to do" },
    ],
  },
  {
    id: "Q9",
    question: "What best describes the kind of business you want?",
    options: [
      { value: "A", label: "Something I can start today with little experience" },
      { value: "B", label: "A brand or audience I build over time" },
      { value: "C", label: "A product or system that sells while I sleep" },
      { value: "D", label: "A high-ticket offer where I trade expertise for money" },
    ],
  },
  {
    id: "Q10",
    question: "How comfortable are you using AI tools?",
    options: [
      { value: "A", label: "Very comfortable — I use them regularly" },
      { value: "B", label: "Somewhat — I've tried a few" },
      { value: "C", label: "Not much — I'm still learning" },
    ],
  },
];

// Scoring matrix: scores[questionId][answer] = { PB, AA, DP, CO }
export const scoring = {
  Q1: { A: { PB: 2, AA: 10, DP: 4, CO: 3 }, B: { PB: 3, AA: 0, DP: 10, CO: 6 }, C: { PB: 8, AA: 4, DP: 6, CO: 4 }, D: { PB: 6, AA: 2, DP: 4, CO: 10 } },
  Q2: { A: { PB: -6, AA: -12, DP: 8, CO: 6 }, B: { PB: 4, AA: -2, DP: 6, CO: 4 }, C: { PB: 6, AA: 8, DP: 4, CO: 6 }, D: { PB: 10, AA: 10, DP: 4, CO: 8 } },
  Q3: { A: { PB: 2, AA: 8, DP: 6, CO: 0 }, B: { PB: 6, AA: 6, DP: 8, CO: 6 }, C: { PB: 10, AA: 2, DP: 4, CO: 8 } },
  Q4: { A: { PB: 8, AA: 4, DP: 2, CO: 4 }, B: { PB: 6, AA: 6, DP: 6, CO: 6 }, C: { PB: 4, AA: 8, DP: 10, CO: 8 } },
  Q5: { A: { PB: 14, AA: 0, DP: 2, CO: 4 }, B: { PB: 8, AA: 0, DP: 2, CO: 4 }, C: { PB: -14, AA: 4, DP: 6, CO: 8 } },
  Q6: { A: { PB: 2, AA: 14, DP: -6, CO: -4 }, B: { PB: 4, AA: 6, DP: 2, CO: 2 }, C: { PB: 6, AA: -14, DP: 10, CO: 8 } },
  Q7: { A: { PB: 6, AA: 2, DP: 6, CO: 2 }, B: { PB: 8, AA: 0, DP: 2, CO: 6 }, C: { PB: 2, AA: 10, DP: 0, CO: 0 }, D: { PB: 4, AA: 6, DP: 8, CO: 4 } },
  Q8: { A: { PB: 4, AA: 8, DP: 6, CO: 6 }, B: { PB: 2, AA: 10, DP: 4, CO: 4 }, C: { PB: 8, AA: 4, DP: 6, CO: 2 }, D: { PB: 6, AA: 2, DP: 4, CO: 8 } },
  Q9: { A: { PB: 2, AA: 10, DP: 4, CO: 2 }, B: { PB: 10, AA: 2, DP: 4, CO: 4 }, C: { PB: 4, AA: 6, DP: 10, CO: 2 }, D: { PB: 4, AA: 0, DP: 2, CO: 10 } },
  Q10: { A: { PB: 4, AA: 4, DP: 8, CO: 4 }, B: { PB: 4, AA: 4, DP: 6, CO: 4 }, C: { PB: 2, AA: 2, DP: 2, CO: 2 } },
};

export const models = {
  PB: {
    id: "PB",
    name: "Personal Brand",
    emoji: "🎤",
    tagline: "Build an audience. Monetize your story.",
    description: "You're built for personal branding. Your personality, story, and insights are your product. Build an audience on YouTube, TikTok, or a newsletter — then monetize through sponsorships, courses, or affiliate deals.",
    timeToRevenue: "3–6 months",
    startupCost: "$0–$200",
    revenuePotential: "$5k–$50k+/month",
    difficulty: "Medium",
    pros: ["Low startup cost", "Compound growth over time", "Multiple monetization paths", "You own your audience"],
    cons: ["Slow to start", "Requires consistent content", "Public-facing"],
    nextSteps: ["Pick one platform (YouTube, TikTok, or newsletter)", "Post 3x per week for 90 days", "Document your journey to $10k/month"],
  },
  AA: {
    id: "AA",
    name: "Amazon FBA / Affiliate",
    emoji: "📦",
    tagline: "Let the platforms do the heavy lifting.",
    description: "You're wired for leverage. Whether it's shipping physical products through Amazon FBA or earning commissions promoting other people's products, you want systems that work while you sleep.",
    timeToRevenue: "1–3 months",
    startupCost: "$500–$3,000",
    revenuePotential: "$3k–$30k+/month",
    difficulty: "Medium-High",
    pros: ["Established marketplace", "Scalable with capital", "Can be largely automated"],
    cons: ["Upfront capital needed", "Platform dependency", "Competitive"],
    nextSteps: ["Research a niche with Jungle Scout or Helium 10", "Find a supplier on Alibaba", "Launch with 1 product and iterate"],
  },
  DP: {
    id: "DP",
    name: "Digital Products",
    emoji: "💻",
    tagline: "Create once. Sell forever.",
    description: "You want income that doesn't require your time after creation. Courses, templates, ebooks, presets, or software — build it once and sell it infinitely. Perfect for someone who wants real passive income.",
    timeToRevenue: "1–2 months",
    startupCost: "$0–$500",
    revenuePotential: "$2k–$20k+/month",
    difficulty: "Medium",
    pros: ["True passive income potential", "High margins (80-95%)", "No inventory", "Scalable instantly"],
    cons: ["Requires upfront effort to create", "Need traffic/audience", "Market can be saturated"],
    nextSteps: ["Identify a skill or knowledge others would pay for", "Build a simple product (Notion template, mini-course, ebook)", "Sell on Gumroad or your own site"],
  },
  CO: {
    id: "CO",
    name: "Coaching / Consulting",
    emoji: "🧠",
    tagline: "Turn expertise into high-ticket income.",
    description: "You have knowledge people will pay premium for. Coaching and consulting is the fastest path to $5k–$10k/month when done right — no audience needed, just expertise and the ability to get results for clients.",
    timeToRevenue: "2–4 weeks",
    startupCost: "$0–$100",
    revenuePotential: "$5k–$30k+/month",
    difficulty: "Low-Medium",
    pros: ["Fastest to first dollar", "High ticket ($500–$5k per client)", "No product needed", "Skills you already have"],
    cons: ["Trades time for money", "Requires direct client interaction", "Limited scalability without a team"],
    nextSteps: ["Define your niche and ideal client", "Create a simple offer ($500–$2k)", "DM 20 people this week who fit your ICP"],
  },
};

export function calculateResult(answers) {
  const totals = { PB: 0, AA: 0, DP: 0, CO: 0 };

  for (const [questionId, answer] of Object.entries(answers)) {
    const scores = scoring[questionId]?.[answer];
    if (scores) {
      totals.PB += scores.PB || 0;
      totals.AA += scores.AA || 0;
      totals.DP += scores.DP || 0;
      totals.CO += scores.CO || 0;
    }
  }

  // Apply gates (soft disqualifiers from Config tab)
  if (answers.Q5 === "C") totals.PB = Math.max(0, totals.PB);
  if (answers.Q2 === "A" || answers.Q6 === "C" || answers.Q10 === "C") totals.AA = Math.max(0, totals.AA);

  const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
  return { totals, winner };
}
