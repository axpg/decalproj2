import './App.css';
import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
}

export default App;
