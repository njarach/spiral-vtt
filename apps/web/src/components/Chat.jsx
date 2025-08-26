import { useState } from 'react'
import Header from './Header'

function Chat() {
  const [messages, setMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: currentMessage.trim(),
        timestamp: new Date().toLocaleTimeString()
      }
      
      setMessages(previousMessages => [...previousMessages, newMessage])
      setCurrentMessage('')
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  return (
  <main className="container-fluid">
    <Header />
      <section>
        <h2>💬 Chat</h2>
        <div style={{height: '400px', overflowY: 'auto', marginBottom: '1rem'}}>
          {messages.map((message) => (
            <blockquote key={message.id}>
              <small>{message.timestamp}</small>
              <p>{message.text}</p>
            </blockquote>
          ))}
          
          {messages.length === 0 && (
            <p><em>Commencez la conversation...</em></p>
          )}
        </div>
        
        <div role='group'>
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Tapez votre message..."
          />
          <button onClick={sendMessage}>Envoyer</button>
        </div>
        
      </section>
      
    </main>
  )
}

export default Chat