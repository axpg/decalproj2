import React from 'react';
import './Home.css'; // Import CSS file for styling
import NoteworthyPNG from './noteworthy.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <header>
        <img src={NoteworthyPNG} alt="Noteworthy A Cappella Logo" className="logo" />
        <nav>
          <ul>
            {/* Replace <a> tags with <Link> components */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/members">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="group-name">Noteworthy A Cappella</h1>
        {/* Other content */}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Home;