'use client'

import { CalendarDays, CircleHelp, Home as HomeIcon, LayoutDashboard, Moon, MoreHorizontal, Sun, Users, WalletCards } from 'lucide-react'

export default function Sidebar({ dark, onToggleTheme }: { dark: boolean; onToggleTheme: () => void }) {
  return <aside className="sidebar"><div className="brand"><span className="brand-mark">⌂</span><strong>Lintel</strong></div><nav><a className="active"><LayoutDashboard size={18}/>Overview</a><a><HomeIcon size={18}/>Rentals</a><a><WalletCards size={18}/>Sales</a><a><CalendarDays size={18}/>Deals</a><a><Users size={18}/>Leads <b>4</b></a><a><Users size={18}/>Contacts</a></nav><div className="side-bottom"><a><CircleHelp size={18}/>Help center</a><button onClick={onToggleTheme}>{dark ? <Sun size={18}/> : <Moon size={18}/>} {dark ? 'Light mode' : 'Dark mode'}</button><div className="profile"><div className="avatar">IB</div><span><strong>Imani Brooks</strong><small>Senior Agent</small></span><MoreHorizontal size={17}/></div></div></aside>
}
