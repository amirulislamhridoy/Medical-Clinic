import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Departments from './Component/Departments/Departments'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
      </Routes>
    </div>
  );
}

export default App;
