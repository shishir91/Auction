import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Drawing from './pages/Drawing';
import Carvings from './pages/Carvings';
import Painting from './pages/Painting';
import Sculptures from './pages/Sculptures';
import Photographic from './pages/Photographic';
import Bidding from './components/Bidding';
import Admin from './components/Admin';
import UserDashboard from './components/UserDashboard/UserDashboard';
import AuctionPanel from './components/UserDashboard/AuctionPanel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/drawing' element={<Drawing/>} />
          <Route exact path='/carvings' element={<Carvings/>} />
          <Route exact path='/painting' element={<Painting/>} />
          <Route exact path='/sculptures' element={<Sculptures/>} />
          <Route exact path='/photographic' element={<Photographic/>}/>
          <Route exact path='/bidding' element={<Bidding/>} />
          <Route exact path='/admin' element={<Admin/>} />
          <Route exact path='/dashboard' element={<UserDashboard/>} />
          <Route exact path='/auctionpanel' element={<AuctionPanel/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
