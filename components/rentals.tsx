import { rentals } from '@/lib/data'

export default function Rentals() {
  return <section className="card"><div className="card-heading"><div><p className="eyebrow">Rentals</p><h2>89% <small className="muted">occupied</small></h2></div><button className="link-btn">All rentals →</button></div><div className="rental-stat"><span>Rent roll</span><strong>$362,277<small>/mo</small></strong></div><div className="rental-stat"><span>Units let</span><strong>93 <small>of 105</small></strong></div><div className="rental-list">{rentals.slice(0, 3).map(r => <p key={r.name}>{r.name}<b>{r.let}/{r.total}</b></p>)}</div></section>
}
