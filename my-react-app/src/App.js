import './App.css';
import Home from './Home.js'
import About from './About.js'
import Videos from './Videos.js'
import Members from './Members.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Members from './Members';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/members" component={Members} />
        </Switch>
        
        {/* Render your existing components here */}
        <Home />
        <About />
        <Videos />
        <Members />
      </div>
    </Router>
  );
}

export default App;
