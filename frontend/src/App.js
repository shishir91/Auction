import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
