import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from "react-router-dom";
import './assets/css/main.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
