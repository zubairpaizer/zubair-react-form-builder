'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tools = [{
    title: 'Single Field',
    name: 'SINGLE_FIELD',
    icon: 'fa fa-wpforms'
}, {
    title: 'Drop Down',
    name: 'SELECT_FIELD',
    icon: 'fa fa-chevron-circle-down'
}, {
    title: 'Check Boxes',
    name: 'CHECK_BOXES',
    icon: 'fa fa-check-square'
}, {
    title: 'Radio Buttons',
    name: 'RADIO_BUTTONS',
    icon: 'fa fa-circle'
}, {
    title: 'Paragraph',
    name: 'PARAGRAPH',
    icon: 'fa fa-paragraph'
}, {
    title: 'Duration Picker',
    name: 'DURATION_PICKER',
    icon: 'fa fa-calendar'
}];

var ToolBox = function (_Component) {
    _inherits(ToolBox, _Component);

    function ToolBox() {
        _classCallCheck(this, ToolBox);

        return _possibleConstructorReturn(this, (ToolBox.__proto__ || Object.getPrototypeOf(ToolBox)).apply(this, arguments));
    }

    _createClass(ToolBox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'toolbox' },
                _react2.default.createElement(
                    'div',
                    { className: 'card card-default' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        'ToolBox'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-body toolbox-list p-0' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'list-group', ref: function ref(tools) {
                                    return _this2._tools = tools;
                                } },
                            Tools.map(function (types) {
                                return _react2.default.createElement(
                                    'li',
                                    { 'data-tool': types.name,
                                        onDragStart: function onDragStart(e) {
                                            return _this2.dragField(e, types.name);
                                        },
                                        key: types.name,
                                        className: 'list-group-item singleField' },
                                    _react2.default.createElement('i', { className: types.icon + " mr-3" }),
                                    types.title
                                );
                            }),
                            this.renderCustomTools()
                        )
                    )
                )
            );
        }
    }, {
        key: 'renderCustomTools',
        value: function renderCustomTools() {
            var _this3 = this;

            if (this.props.custom) {
                return this.props.custom.map(function (types) {
                    return _react2.default.createElement(
                        'li',
                        { 'data-tool': types.toolbox.name,
                            onDragStart: function onDragStart(e) {
                                return _this3.dragField(e, types.toolbox.name);
                            },
                            key: types.toolbox.name,
                            className: 'list-group-item singleField' },
                        _react2.default.createElement('i', { className: types.toolbox.icon + " mr-3" }),
                        types.toolbox.title
                    );
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tools = this._tools;
            var $ = window.$;
            $(tools).children().each(function (i, l) {
                $(l).draggable({ helper: "clone" });
            });
        }
    }, {
        key: 'dragField',
        value: function dragField(e, types) {
            e.dataTransfer.setData("dragField", types);
        }
    }]);

    return ToolBox;
}(_react.Component);

exports.default = ToolBox;
