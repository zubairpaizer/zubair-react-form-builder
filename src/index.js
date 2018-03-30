import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery-ui-dist/jquery-ui.min';
import '../node_modules/jquery-ui-dist/jquery-ui.min.css';
import '../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon';
import '../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
window.$ = window.jQuery = window.jquery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
