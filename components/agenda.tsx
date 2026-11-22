import { agenda } from '@/lib/data'

export default function Agenda() {
  return <section className="card"><div className="card-heading"><div><p className="eyebrow">Today's agenda</p><h2>1 <small className="muted">of 6 done</small></h2></div><button className="link-btn">View calendar →</button></div><div className="agenda">{agenda.map(item => <div key={item.time + item.title}><time>{item.time}</time><span><b>{item.title}</b><small>{item.meta}</small></span></div>)}</div></section>
}
