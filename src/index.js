import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import modules from './modules'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import penderMiddleware from 'redux-pender';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
