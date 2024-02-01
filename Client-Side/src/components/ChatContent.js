import React from 'react';

const ChatContent = ({ tab, publicChats, privateChats, userData, handleMessage, sendValue, sendPrivateValue }) => {
  return (
    <div className="chat-content">
      <ul className="chat-messages">
        {tab === "CHATROOM"
          ? publicChats.map((chat, index) => (
              <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                <div className="message-data">{chat.message}</div>
                {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
              </li>
            ))
            :privateChats.get(tab).map((chat, index) => (
              <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                <div className="message-data">{chat.message}</div>
                {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
              </li>
            ))}
      </ul>

      <div className="send-message">
        <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} />
        <button type="button" className="send-button" onClick={tab === "CHATROOM" ? sendValue : sendPrivateValue}>
            Send
        </button>
      </div>
    </div>
  );
};

export default ChatContent;
