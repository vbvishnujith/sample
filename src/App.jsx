import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Home from './pages/Home';
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-yellow-400 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/Education" className="hover:text-yellow-400 transition duration-300">
              Education
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-yellow-400 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-yellow-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
