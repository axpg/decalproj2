import React from 'react';
import './Styling/Home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="container">
      <header>
        <img src="noteworthy.png" alt="Noteworthy A Cappella Logo" className="logo" />
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
