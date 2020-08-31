import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory} from "history"
import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>,
  document.getElementById("root")
);


export default hot(module)(App);
