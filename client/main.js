import React, {Component} from 'react';
import createHistory from 'history/lib/createHashHistory';
import {Provider} from 'react-redux';
import {Router, Redirect} from 'react-router';
import configureStore from 'stores/configureStore';
import routes from './routes';
import {syncReduxAndRouter} from 'redux-simple-router';
import 'semantic-ui-css/components/grid.css'
import 'babel-polyfill';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

export default (props) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Redirect from="/" to="home" />
        {routes}
      </Router>
    </Provider> 
  );
}

