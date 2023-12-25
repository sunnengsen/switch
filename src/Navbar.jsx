

import React from 'react';
import { Link, Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
        <nav className="navbar flex items-center justify-between bg-blue-500 py-4 px-6">
            <ul className="nav-menu flex space-x-4 text-white">
                <li className="nav-item"><Link to="../src/component/home">Home</Link></li>
                <li className="nav-item"><Link to="../src/component/about">About</Link></li>
                <li className="nav-item"><Link to="../src/component/faq">Faq</Link></li>
                <li className="nav-item"><Link to="../src/component/place">Place</Link></li>
            </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
            <Route path="/place" element={<Place />} />
          
        </Routes>
        </Router>
    );
};

export default Navbar;