import { agents } from '@/lib/data'

export default function TopAgents() {
  return <section className="card"><div className="card-heading"><div><p className="eyebrow">Top agents</p><h2>Commission</h2></div><button className="link-btn">View team →</button></div><div className="agents">{agents.map((agent, i) => <div className="agent" key={agent.name}><span className="rank">{i + 1}</span><div className="avatar small">{agent.name.split(' ').map(x => x[0]).join('')}</div><span><b>{agent.name}</b><small>{agent.note}</small></span><strong>{agent.amount}</strong></div>)}</div></section>
}
