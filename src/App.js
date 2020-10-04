import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
