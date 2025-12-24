import { useState, useEffect, useRef } from "react";
import { getCollegeReply } from "./rules";
import "./chatbot.css";
import chatIcon from "../assets/gif/chat-icon.gif";

function CollegeChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am the College Assistant. How can I help you?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // ✅ State to toggle chat
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text: text };
    setMessages(prev => [...prev, userMessage]);

    if (text === input) setInput("");

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getCollegeReply(text)
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500); 
  };

  const parseBold = (text) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(<strong key={match.index}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts.length > 0 ? parts : [text];
  };

  const formatMessage = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, title, url] = match;
      const matchStart = match.index;

      if (matchStart > lastIndex) {
        const textSegment = text.slice(lastIndex, matchStart);
        parts.push(...parseBold(textSegment));
      }

      const titleContent = parseBold(title);

      if (url.startsWith("chat:")) {
        parts.push(
          <button
            key={matchStart}
            className="chat-link-btn"
            onClick={() => sendMessage(url.replace("chat:", ""))}
          >
            {titleContent}
          </button>
        );
      } else {
        parts.push(
          <a key={matchStart} href={url} target="_blank" rel="noopener noreferrer">
            {titleContent}
          </a>
        );
      }
      lastIndex = matchStart + fullMatch.length;
    }

    if (lastIndex < text.length) {
      const textSegment = text.slice(lastIndex);
      parts.push(...parseBold(textSegment));
    }
    return parts;
  };

  return (
    <>
      {/* 1. Toggle Button (Update this part) */}
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          {/* ✅ USE THE VARIABLE HERE */}
          <img src={chatIcon} alt="Chat" />
        </button>
      )}

      {/* 2. Chat Window (Visible when open) */}
      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            <span>College Chatbot</span>
            {/* Close Button */}
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {formatMessage(msg.text)}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about admissions, fees..."
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CollegeChatbot;