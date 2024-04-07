import React from 'react';
import './Home.css'; // Import CSS file for styling
import NoteworthyPNG from './noteworthy.png'

function Home() {
  return (
    <div className="container">
      <header>
        <img src={NoteworthyPNG} alt="Noteworthy A Cappella Logo" className="logo" />
        <nav>
          <ul>
          <li><button onClick={() => window.location.href = '/'}>Home</button></li>
          <li><button onClick={() => window.location.href = '/about'}>About</button></li>
          <li><button onClick={() => window.location.href = '/members'}>Members</button></li>
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