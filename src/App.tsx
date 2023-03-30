import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Compared from './pages/comparePage/Compared';
import { Home } from './pages/Home';
import { Trending } from './pages/TrendingPage/Trending';

function App() {

  return (
    <div className="App">
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/compare' element={<Compared />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
