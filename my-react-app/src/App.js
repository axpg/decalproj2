import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    } else if (currentPage === 'Members') {
        return <Members />; 
    } else if (currentPage == 'Videos') {
        return <Videos />; // Don't render anything extra
    }
    else {
      return null;
    }
}
return (
  <div> 
     {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />} 
     {renderPage()} 
  </div>
);
}

export default App;
