type StatCardProps = { label: string; value: string; detail: string; tone: string }

export default function StatCard({ label, value, detail, tone }: StatCardProps) {
  return <section className="card"><p className="eyebrow">{label}</p><strong className="metric">{value}</strong><span className={tone === 'positive' ? 'trend' : 'muted'}>{detail}</span></section>
}
