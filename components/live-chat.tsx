'use client'

import { useState } from 'react'

export default function LiveChat() {
  const [messages, setMessages] = useState([{ who: 'Spencer Hale', text: 'Can I see a photo of the upstairs, or other options nearby?' }])
  const [draft, setDraft] = useState('')
  const send = () => { if (!draft.trim()) return; setMessages([...messages, { who: 'Imani Brooks', text: draft.trim() }]); setDraft('') }
  return <section className="card live-chat"><div className="chat-head"><span><b>Live Chat</b><small>23 online</small></span></div><div className="chat-property"><div className="thumb"/><b>Hollis Modern House</b><small>La Jolla · $1.24M</small></div><div className="messages">{messages.map((message, i) => <div className={`message ${i > 0 ? 'mine' : ''}`} key={`${message.who}-${i}`}><b>{message.who}</b><p>{message.text}</p></div>)}</div><div className="chat-input"><input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Message"/><button onClick={send}>Send</button></div></section>
}
