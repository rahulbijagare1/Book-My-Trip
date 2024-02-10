import React, { useState } from 'react';
import './Login1.css';

function Login1() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Perform validation
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
  
      alert('Authentication successful!');
    };

    return (
      <div className="login-container">
      <h1 className="c1">Please login to your account</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email} 
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password} 
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button> {/* Moved onClick to onSubmit */}
          <br></br>
          <div >            
              <a className="Link1" href="#!"style={{ marginLeft: '15px' }}>Forgot password?</a>
           </div>
        </form>
      </div>
    );
};

export default Login1;
