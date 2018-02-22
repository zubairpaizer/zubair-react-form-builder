import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery-ui-dist/jquery-ui.min';
import '../node_modules/jquery-ui-dist/jquery-ui.min.css';
window.$ = window.jQuery = window.jquery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
