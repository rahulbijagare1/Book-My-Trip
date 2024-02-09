
import React, { useState } from 'react';
import './Registration.css';
import emailIcon from './email.jpg';
import usernameIcon from './username.jpg';
import passwordIcon from './password.jpg';
import userTypeIcon from './UserType.jpg';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    userType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="registration-container">
      <h2>Welcome to Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <img src={usernameIcon} alt="Username" style={{ width: '20px', marginRight: '10px' }} />
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </label>
        <label>
          <img src={emailIcon} alt="Email" style={{ width: '20px', marginRight: '10px' }} />
          Email Id:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </label>
        <label>
          <img src={passwordIcon} alt="Password" style={{ width: '20px', marginRight: '10px' }} />
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </label>
        <label>
          <img src={userTypeIcon} alt="UserType" style={{ width: '20px', marginRight: '10px' }} />
          User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            style={{ width: 'calc(130% - 20px)', height: '40px' }}
          >
            <option value="">Select User Type</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
            <option value="TourOperator">TourOperator</option>
          </select>
        </label>
        <button type="submit" style={{ width: '100%', marginTop: '10px' }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
