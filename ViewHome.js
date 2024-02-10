import React from 'react';
import { Link } from 'react-router-dom';
import './Viewhome.css'; // Import your CSS file

const ViewHome = () => {
  return (
    <div className="viewhome-container">
   
      <div className="button-container">
        <h1>Welcome to the Book My Trip</h1>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/Login1"> {/* Add this Link component */}
          <button>Login</button>
        </Link>
      </div>
     
    </div>
  );
};

export default ViewHome;