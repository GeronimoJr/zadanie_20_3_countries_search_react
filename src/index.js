import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, hashHistory } from 'react-router';
import DevTools from './DevTools';
import Navigation from './presentational/navigation.component';
import { getCountries } from './actions/actions-countries.js';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>

        </Router>
    </Provider>,
    document.getElementById('root')
);
