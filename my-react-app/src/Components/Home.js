import React from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="container">
      <header>
        <img src="https://yt3.googleusercontent.com/kXHxLMVZpKSFTdvMjRW1nYSGclKfi7zmQa8Wl3l3ipBqh-Qa6Ruuuwg7U4I4sl9gd3u24-3J3Fg=s176-c-k-c0x00ffffff-no-rj" alt="Noteworthy A Cappella Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
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
