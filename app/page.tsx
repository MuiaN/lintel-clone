'use client'

import { useState } from 'react'
import { Bell, MessageCircle, Search } from 'lucide-react'
import Topbar from '@/components/topbar'
import StatCard from '@/components/stat-card'
import CommissionChart from '@/components/commission-chart'
import PipelineBoard from '@/components/pipeline-board'
import Agenda from '@/components/agenda'
import Rentals from '@/components/rentals'
import TopAgents from '@/components/top-agents'
import Activity from '@/components/activity'
import LiveChat from '@/components/live-chat'
import { stats } from '@/lib/data'

export default function Overview() {
  const [dark, setDark] = useState(false)
  const [showChat, setShowChat] = useState(true)
  return <main className={dark ? 'app dark' : 'app'}>
    <div className="content"><div className="lintel-shell"><a className="shell-brand" href="#overview"><span className="brand-mark">⌂</span><strong>Lintel</strong></a><Topbar showChat={showChat} onToggleChat={() => setShowChat(value => !value)} /><div className="shell-tools"><button className="icon-btn" aria-label="Search"><Search size={18}/></button><button className="icon-btn" aria-label="Notifications"><Bell size={18}/><i/></button><button className="profile-trigger"><span className="avatar">IB</span><span><strong>Imani Brooks</strong><small>Senior Agent</small></span></button><button className="theme-trigger" onClick={() => setDark(value => !value)} aria-label="Toggle theme">{dark ? '☼' : '◐'}</button></div></div><section className="metrics">{stats.map(stat => <StatCard key={stat.label} {...stat} />)}</section><div className="main-grid"><CommissionChart/><section className="card featured"><div className="property-image"><div className="image-label">Featured listing <span>01 / 10</span></div></div><div className="property-copy"><p className="eyebrow">For sale · La Jolla</p><h2>Hollis Modern House</h2><strong className="price">$1.24M</strong><div className="facts"><span>4 <small>bd</small></span><span>3 <small>ba</small></span><span>2,380 <small>ft²</small></span></div><p className="muted">23 days listed · 1,842 views</p><button className="outline-btn">Open listing</button></div></section></div><div className="lower-grid"><PipelineBoard/><Agenda/></div><div className="lower-grid"><Rentals/><TopAgents/></div><div className={showChat ? 'lower-grid' : 'single-grid'}><Activity/>{showChat && <LiveChat/>}</div></div>
  </main>
}
