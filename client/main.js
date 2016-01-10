import React, {Component} from 'react';
import createHistory from 'history/lib/createHashHistory';
import {Provider} from 'react-redux';
import {Router, Redirect} from 'react-router';
import configureStore from 'stores/configureStore';
import routes from './routes';
import {syncReduxAndRouter} from 'redux-simple-router';
import 'bootstrap-css-only/css/bootstrap.min.css';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Redirect from="/" to="home" />
          {routes}
        </Router>
      </Provider> 
    );
  }
}
