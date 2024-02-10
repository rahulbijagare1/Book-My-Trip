import React, { useState } from 'react';
import './Registration.css'; // Import the styles from Registration component
import emailIcon from './email.jpg';
import usernameIcon from './username.jpg';
import passwordIcon from './password.jpg';
import userTypeIcon from './UserType.jpg';

const CustomerDetails = () => {
  const [customerDetail, setCustomerDetail] = useState({
    id: '',
    name: '',
    email: '',
    uid: '',
    marital_status: '',
    address: '',
    phone_no: '',
    DOB: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const updateDetails = () => {
    // Implement logic to fetch and update customer details from the database or storage
    alert('Customer details updated!');
  };

  const saveDetails = () => {
    // Implement logic to save customer details to the database or storage
    alert('Customer details saved!');
  };

  return (
    <div className="details-container">
    
      <form>
    <div className="c1">  <h1><b>Customer Detail Form</b></h1></div>

        <label htmlFor="name"></label>
          Name:
          <input
            type="text"
            name="name"
            value={customerDetail.name}
            onChange={handleInputChange}
            style={{ width: '90%' }}
            required
          />
        
        <label htmlFor="email"></label>
          Email:
          <input
            type="email"
            name="email"
            value={customerDetail.email}
            onChange={handleInputChange}
            style={{ width: '90%' }}
            required
          />
        
        <label htmlFor="uid">UID:</label>
        <input
          type="text"
          id="uid"
          name="uid"
          value={customerDetail.uid}
          onChange={handleInputChange}
          style={{ width: '90%' }}
          required
        />

        <label htmlFor="marital_status">Marital Status:</label>
        <input
          type="text"
          id="marital_status"
          name="marital_status"
          value={customerDetail.marital_status}
          onChange={handleInputChange}
          style={{ width: '90%' }}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customerDetail.address}
          onChange={handleInputChange}
          style={{ width: '90%' }}
          required
        />

        <label htmlFor="phone_no">Phone Number:</label>
        <input
          type="tel"
          id="phone_no"
          name="phone_no"
          value={customerDetail.phone_no}
          onChange={handleInputChange}
          style={{ width: '90%' }}
          required
        />

        <label htmlFor="DOB">Date of Birth:</label>
        <input
          type="text"
          id="DOB"
          name="DOB"
          value={customerDetail.DOB}
          onChange={handleInputChange}
           style={{ width: '90%' }}
          required
        />


        {/* Add similar labels and inputs for other fields */}
        <button type="button" onClick={updateDetails} style={{ width: '100%', marginTop: '10px' }}>
          Update Details
        </button>
        <button type="button" onClick={saveDetails} style={{ width: '100%', marginTop: '10px' }}>
          Save Details
        </button>
      </form>
    </div>
  );
};

export default CustomerDetails;