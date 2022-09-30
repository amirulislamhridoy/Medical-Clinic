import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Departments from './Component/Departments/Departments'
import Features from './Component/Features/Features';
import Login from './Component/Login/Login';
import AllAppointments from './Component/AllAppointments/AllAppointments';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/features' element={<Features />} />
        <Route path='/allAppointment' element={<AllAppointments />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
