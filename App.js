import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewHome from './ViewHome';
import Registration from './Registration';
import Login1 from './Login1';
import './Login1.css';
import './Registration.css';
import './Viewhome.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ViewHome />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/Login1" element={<Login1 />} />
    </Routes>
  </Router>
);

export default App;