import { activity } from '@/lib/data'

export default function Activity() {
  return <section className="card activity"><div className="card-heading"><div><p className="eyebrow">Activity</p><h2>Recent updates</h2></div><button className="link-btn">See all →</button></div>{activity.map(item => <div className="activity-row" key={item.text}><div className="avatar small">{item.initials}</div><span><b>{item.text}</b><small>{item.where || 'CRM update'} · {item.when}</small></span></div>)}</section>
}
