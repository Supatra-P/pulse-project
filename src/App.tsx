import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';
import { Trending } from './pages/TrendingPage/Trending';

function App() {

  return (
    <div className="App">
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Trending />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
