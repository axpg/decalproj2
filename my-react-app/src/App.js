import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
import { useState } from 'react';

import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Videos from './Videos';
import Members from './Members';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Members':
        return <Members />;
      case 'Videos':
        return <Videos />;
      default:
        return null;
    }
  };

  console.log('Current page:', currentPage);

  return (
    <div>
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {renderPage()}
    </div>
  );
}

export default App;
