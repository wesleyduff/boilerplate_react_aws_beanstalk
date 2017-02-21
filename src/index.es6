import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
//import {callOauth} from './actions/oauthActions';
//import './styles/styles.css'; //webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/base.css';

//if hydrating state from localstorage or from server then set initial state as a param here.
const store = configureStore();
//load something on load
//store.dispatch(callOauth());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('#app')
); 