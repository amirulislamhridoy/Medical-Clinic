import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Departments from './Component/Departments/Departments'
import Appointment from './Component/Appointment/Appointment';
import Login from './Component/Login/Login';
import AllAppointments from './Component/AllAppointments/AllAppointments';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from './Component/Make Admin/MakeAdmin';
import NotFound from './Component/NotFound/NotFound';
import Doctors from './Component/Doctors/Doctors';
import Register from './Component/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments>Departments</Departments>} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/allAppointment' element={<AllAppointments />} />
        <Route path='/makeAdmin' element={<MakeAdmin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
