import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { monthly } from '@/lib/data'

export default function CommissionChart() {
  return <section className="card chart-card"><div className="card-heading"><div><p className="eyebrow">Commission</p><h2>$913,375</h2><p className="muted">earned this year · <b>1</b> of 12 months at target</p></div><div className="segmented"><button>6M</button><button className="selected">12M</button></div></div><div className="legend"><span><i className="dot purple"/> Commission earned</span><span><i className="dot gray"/> Team target · $131.7K/mo</span></div><ResponsiveContainer width="100%" height={220}><AreaChart data={monthly}><defs><linearGradient id="commission-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9277ff" stopOpacity={.3}/><stop offset="100%" stopColor="#9277ff" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis hide/><Tooltip/><Area type="monotone" dataKey="value" stroke="#9277ff" fill="url(#commission-fill)" strokeWidth={3}/></AreaChart></ResponsiveContainer></section>
}
