import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Departments from './Component/Departments/Departments'
import Features from './Component/Features/Features';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/features' element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
