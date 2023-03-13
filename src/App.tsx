import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/Home';
import { Recommended } from './components/Recommended';
import { Trending } from './components/Trending';
import { Compare } from './components/Compare';

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
