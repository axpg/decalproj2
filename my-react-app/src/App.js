import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
<<<<<<< HEAD
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
=======


function App() {
  return (
      <div>
        
        {/* Render your existing components here */}
        <Home />
        <About />
        <Videos />
        <Members />
      </div>
  );
>>>>>>> 339cf1971ff6db99eda605a8a1561f0ea0cec468
}

export default App;
