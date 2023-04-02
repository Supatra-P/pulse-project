import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import Compare from './pages/comparePage/Compare';
import { Home } from './pages/Home';
import { Trending } from './pages/trendingPage/Trending';
import TrendingPage from './pages/trendingPage/TrendingPage';

function App() {

  return (
    <div className="App">
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/trendingPage' element={<TrendingPage />} />
          <Route path='/compare' element={<Compare />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
