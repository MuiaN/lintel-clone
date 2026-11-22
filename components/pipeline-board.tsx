import { pipeline } from '@/lib/data'

export default function PipelineBoard() {
  return <section className="card"><div className="card-heading"><div><p className="eyebrow">Pipeline by stage</p><h2>$222,806 <small className="muted">weighted commission</small></h2></div><button className="link-btn">Open board →</button></div><p className="muted">13 open deals · $406.3K if all close</p><div className="pipeline">{pipeline.map(p => <div className="pipe" key={p.stage} style={{ borderColor: p.color }}><b>{p.count}</b><span>{p.stage}</span><strong>{p.value}</strong></div>)}</div></section>
}
