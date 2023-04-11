import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app-page">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
