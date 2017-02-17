import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import './styles/styles.css'; //webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/base.css';


render (
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('#app')
); 