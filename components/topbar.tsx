import { Bell, MessageCircle, Search } from 'lucide-react'

export default function Topbar({ showChat, onToggleChat }: { showChat: boolean; onToggleChat: () => void }) {
  return <div className="topbar"><div className="topbar-intro"><p className="eyebrow">Sunday, November 22, 2026</p><h1>Good morning, <span>Imani</span></h1></div><div className="topbar-actions"><button className="icon-btn" aria-label="Search"><Search size={18}/></button><button className="icon-btn" aria-label="Notifications"><Bell size={18}/><i/></button><button className="topbar-chat-button" onClick={onToggleChat} aria-expanded={showChat}><MessageCircle size={17}/><span>{showChat ? 'Hide chat' : 'Live chat'}</span></button></div></div>
}
