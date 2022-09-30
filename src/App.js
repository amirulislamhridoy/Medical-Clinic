import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Departments from './Component/Departments/Departments'
import Features from './Component/Features/Features';
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/features' element={<Features />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
