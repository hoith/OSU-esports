import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Projects} from './Projects';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NaviBar} from './components/NaviBar'


class App extends Component{
  render(){
  return (
  <React.Fragment>
  <NaviBar/>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/Contact" component={Contact}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </Layout>
  </React.Fragment>
  );
}
}
export default App;
