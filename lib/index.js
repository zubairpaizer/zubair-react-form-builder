'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Preview = exports.ToolBox = exports.FormContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormContainer = require('./components/FormContainer');

var _FormContainer2 = _interopRequireDefault(_FormContainer);

var _ToolBox = require('./components/ToolBox');

var _ToolBox2 = _interopRequireDefault(_ToolBox);

var _Preview = require('./components/Preview');

var _Preview2 = _interopRequireDefault(_Preview);

require('./css/App.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../../../node_modules/jquery-ui-dist/jquery-ui.min');

require('../../../node_modules/jquery-ui-dist/jquery-ui.min.css');

require('../../../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon');

require('../../../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../../../node_modules/font-awesome/css/font-awesome.min.css';

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../node_modules/popper.js/dist/popper.min';
//import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
window.$ = window.jQuery = window.jquery = _jquery2.default;

exports.FormContainer = _FormContainer2.default;
exports.ToolBox = _ToolBox2.default;
exports.Preview = _Preview2.default;
