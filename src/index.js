import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import modules from './modules'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(modules, devTools);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
