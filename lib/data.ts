export const user = { name: 'Imani', greeting: 'Good morning' }

export const stats = [
  { label: 'Active listings', value: '10', detail: '↑ 2 this month', tone: 'positive' },
  { label: 'Under offer', value: '3', detail: '↑ 1 this week', tone: 'positive' },
  { label: 'Commission this month', value: '$135,025', detail: '↑ 12.4% vs last month', tone: 'positive' },
  { label: 'Avg. days on market', value: '54', detail: 'Across your listings', tone: 'muted' },
]

export const monthly = [
  { month: 'Dec', value: 30 }, { month: 'Jan', value: 42 }, { month: 'Feb', value: 48 },
  { month: 'Mar', value: 65 }, { month: 'Apr', value: 53 }, { month: 'May', value: 72 },
  { month: 'Jun', value: 68 }, { month: 'Jul', value: 86 }, { month: 'Aug', value: 77 },
  { month: 'Sep', value: 96 }, { month: 'Oct', value: 82 }, { month: 'Nov', value: 110 },
]

export const pipeline = [
  { stage: 'Viewing', count: 3, value: '$14.9K', color: '#a68bff' },
  { stage: 'Offer', count: 3, value: '$27.6K', color: '#f6bd60' },
  { stage: 'Negotiation', count: 4, value: '$87.6K', color: '#68c6b2' },
  { stage: 'Under contract', count: 3, value: '$92.7K', color: '#ed8065' },
]

export const agenda = [
  { time: '9:30', title: 'Viewing with Priya Natarajan', meta: 'Hollis Modern House · 45 min · Imani' },
  { time: '11:00', title: 'Call Elise about the counter-offer', meta: 'Hollis Modern House · 20 min · Imani' },
  { time: '12:30', title: 'Photographer at Larchwood', meta: 'Larchwood House · 90 min · Jordan' },
  { time: '3:00', title: 'Viewing with Spencer Hale', meta: 'Hollis Modern House · 45 min · Imani' },
  { time: '4:30', title: 'Sign lease - Quayside 3C', meta: 'Quayside Apartments · 30 min · Camila' },
  { time: '6:00', title: 'Send Hollis disclosure pack', meta: 'Hollis Modern House · 15 min · Imani' },
]

export const rentals = [
  { name: 'Arbor Tower', let: 44, total: 48 }, { name: 'Northbank Lofts', let: 31, total: 36 },
  { name: 'Quayside Apartments', let: 17, total: 18 }, { name: 'Stonebrook Cabin', let: 1, total: 1 },
  { name: 'Hearth Pavilion', let: 0, total: 1 }, { name: 'Casa Marea Guest House', let: 0, total: 1 },
]

export const agents = [
  { name: 'Imani Brooks', amount: '$420.6K', note: '100% of $420K target', role: 'Senior Agent' },
  { name: 'Camila Duarte', amount: '$170.6K', note: '107% of $160K target', role: 'Leasing Manager' },
  { name: 'Hana Seo', amount: '$169.3K', note: '94% of $180K target', role: 'Mortgage Advisor' },
  { name: 'Henrik Dahl', amount: '$103.3K', note: '20% of $520K target', role: 'Managing Broker' },
  { name: 'Jordan Ellis', amount: '$49.6K', note: '17% of $300K target', role: 'Listing Agent' },
]

export const activity = [
  { initials: 'SH', text: 'Spencer raised his offer to $1.215M', where: 'Hollis Modern House', when: '18 min ago' },
  { initials: 'IB', text: 'Imani showed Hollis to Priya Natarajan', where: 'Hollis Modern House', when: '1 h ago' },
  { initials: 'JE', text: 'Jordan picked up a portal lead for Mistfield Cabin', where: '', when: '2 h ago' },
  { initials: 'HD', text: 'Henrik cut Cedar Ridge to $1.395M', where: 'Cedar Ridge House', when: '22 h ago' },
]
