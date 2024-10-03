// import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Routes/ProtectedRoute';
function App() {
  return (
    <>
    <ToastContainer/> 
      <Routes>
<Route path="/" element= {
  <ProtectedRoute>
<HomePage/>
  </ProtectedRoute>
  }/>
<Route path="/login" element= {<Login/>}/>
<Route path="/register" element= {<Register/>}/>
      </Routes>
  
    </>
  );
}

export default App;
