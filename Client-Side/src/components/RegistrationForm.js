import React from 'react';
import './RegistrationForm.css'; 

const RegistrationForm = ({ userData, handleInput, handleUsername, registerUser }) => {
  return (
    <div className="register">
      <h2>Welcome to the Leap Room</h2>
      <div className="form-group">
        <label htmlFor="user-name">Username:</label>
        <input
          style={{marginLeft:"0.6rem"}}
          id="user-name"
          type="text"
          placeholder="Enter your username"
          name="username"
          value={userData.username}
          onChange={handleUsername}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user-email">Email:</label>
        <input
          style={{marginLeft:"3.42rem"}}
          id="user-email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userData.email}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user-password">Password:</label>
        <input
          id="user-password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={userData.password}
          onChange={handleInput}
        />
      </div>
      <button type="button" onClick={registerUser}>
        Connect
      </button>
    </div>
  );
};

export default RegistrationForm;
