
import 'semantic-ui-css/semantic.min.css';
import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SideNav from './features/SideNav';
import Dashboard from './features/Dashboard';


const App = () => {
    return (
        <React.Fragment>
            <h1>App</h1>
            <Link to="/">home</Link>
            <br></br>
            <Link to="/Dashboard">Dashboard</Link>
          <Switch>
            <Route exact path="/" component={SideNav} />
            <Route path="/Dashboard" component={Dashboard}/>
          </Switch>
        </React.Fragment>
      );
}

export default hot(module)(App);