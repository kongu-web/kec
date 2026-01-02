import { useState, useEffect, useRef } from "react";
import { getCollegeReply } from "./rules";
import "./chatbot.css";
import chatIcon from "../assets/gif/chat-icon.gif";

function CollegeChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am the KEC Assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // UI State for realism
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text: text };
    setMessages(prev => [...prev, userMessage]);
    
    if (text === input) setInput("");
    setIsTyping(true); // Show typing indicator

    // Simulate network delay for realism
    setTimeout(() => {
      const reply = getCollegeReply(text);
      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false); // Hide typing
    }, 600); 
  };

  // Helper to parse bold text (**text**)
  const parseBold = (text) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let parts = [];
    let lastIndex = 0;
    let match;
    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      parts.push(<strong key={match.index}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length > 0 ? parts : [text];
  };

  // Helper to parse links [Title](url)
  const formatMessage = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, title, url] = match;
      const matchStart = match.index;
      if (matchStart > lastIndex) parts.push(...parseBold(text.slice(lastIndex, matchStart)));
      
      const titleContent = parseBold(title);

      if (url.startsWith("chat:")) {
        parts.push(
          <button key={matchStart} className="chat-link-btn" onClick={() => sendMessage(url.replace("chat:", ""))}>
            {titleContent}
          </button>
        );
      } else {
        parts.push(
          <a key={matchStart} href={url} rel="noopener noreferrer">
            {titleContent}
          </a>
        );
      }
      lastIndex = matchStart + fullMatch.length;
    }
    if (lastIndex < text.length) parts.push(...parseBold(text.slice(lastIndex)));
    return parts;
  };

  return (
    <>
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <img src={chatIcon} alt="Chat" />
        </button>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            {/* ✅ Renamed Chatbot */}
            <span>KEC Assistant</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {formatMessage(msg.text)}
              </div>
            ))}
            {/* Typing Indicator */}
            {isTyping && <div className="msg bot typing">...</div>}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              // ✅ Removed strict placeholder text
              placeholder="Type your question..." 
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()}>
              {/* Arrow Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CollegeChatbot;