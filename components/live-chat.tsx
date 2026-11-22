'use client'

import { ChevronLeft, ChevronRight, MessageCircle, Send, X } from 'lucide-react'
import { useState } from 'react'

export default function LiveChat({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const [messages, setMessages] = useState([{ who: 'Spencer Hale', text: 'Can I see a photo of the upstairs, or other options nearby?' }])
  const [draft, setDraft] = useState('')
  const send = () => { const value = draft.trim(); if (!value) return; setMessages(current => [...current, { who: 'Imani Brooks', text: value }]); setDraft('') }
  return <aside className={`live-chat-drawer ${open ? 'is-open' : 'is-closed'}`} aria-label="Live chat">
    <button className="chat-rail-toggle" onClick={onToggle} aria-label={open ? 'Collapse live chat' : 'Expand live chat'}>{open ? <ChevronRight size={18}/> : <ChevronLeft size={18}/>}<MessageCircle size={18}/></button>
    {open && <div className="live-chat-inner"><div className="chat-head"><span><b>Live Chat</b><small><i className="online-dot"/>23 online</small></span><button onClick={onToggle} aria-label="Close live chat"><X size={17}/></button></div><div className="chat-tabs"><button className="active">Messages <b>3</b></button><button>Activity</button></div><div className="chat-property"><div className="thumb"/><b>Hollis Modern House</b><small>La Jolla · $1.24M</small></div><div className="messages">{messages.map((message, i) => <div className={`message ${i > 0 ? 'mine' : ''}`} key={`${message.who}-${i}`}><b>{message.who}</b><p>{message.text}</p></div>)}</div><div className="chat-input"><input value={draft} onChange={event => setDraft(event.target.value)} onKeyDown={event => event.key === 'Enter' && send()} placeholder="Message"/><button onClick={send} aria-label="Send message"><Send size={15}/></button></div></div>}
  </aside>
}
