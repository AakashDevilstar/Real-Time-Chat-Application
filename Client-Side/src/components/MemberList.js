import React from 'react';

const MemberList = ({ tab, privateChats, setTab }) => {
  return (
    <div className="member-list">
      <ul>
        <h1>Leap Room</h1>
        <li onClick={() => setTab("CHATROOM")} className={`member ${tab === "CHATROOM" && "active"}`}>
          Chatroom
        </li>
        {[...privateChats.keys()].map((name, index) => (
          <li onClick={() => setTab(name)} className={`member ${tab === name && "active"}`} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
