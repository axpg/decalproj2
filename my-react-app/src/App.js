import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
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

  return (
    <div>
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {renderPage()}
    </div>
  );
}
