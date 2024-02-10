import logo from './logo.svg';
import './App.css';
import ViewHome from './Pages/ViewHome';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
<>
<Router>

      <Routes>
        <Route path='' exact element={<ViewHome/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/Login' exact element={<Login/>} />
        <Route path='/home' element={<HomePage/>} /> 
        
      </Routes>



    
</Router>

    
    </>
  );
}

export default App;

