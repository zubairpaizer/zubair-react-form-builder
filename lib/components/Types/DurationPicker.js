'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DurationPicker = function (_Component) {
    _inherits(DurationPicker, _Component);

    function DurationPicker(props) {
        _classCallCheck(this, DurationPicker);

        var _this = _possibleConstructorReturn(this, (DurationPicker.__proto__ || Object.getPrototypeOf(DurationPicker)).call(this, props));

        _this.state = {
            tab: '',
            title: '',
            titleFrom: '',
            titleTo: '',
            type: 'DURATION',
            name: '',
            toolType: 'DURATION_PICKER',
            defaultValue: '',
            placeholder: '',
            description: '',
            validation: {
                isReadOnly: false,
                isRequired: false
            }
        };
        _this.changeValue = _this.changeValue.bind(_this);
        return _this;
    }

    _createClass(DurationPicker, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState(this.props.field);
        }
    }, {
        key: 'changeValue',
        value: function changeValue(stateFor, value) {
            var _this2 = this;

            switch (stateFor) {
                case "NAME":
                    this.setState({ name: value });
                    break;
                case "TITLE":
                    this.setState({ title: value });
                    break;
                case "TITLE_FROM":
                    this.setState({ titleFrom: value });
                    break;
                case "TITLE_TO":
                    this.setState({ titleTo: value });
                    break;
                case "TYPE":
                    this.setState({ type: value });
                    break;
                case "DESCRIPTION":
                    this.setState({ description: value });
                    break;
                case "DEFAULT_VALUE":
                    this.setState({ defaultValue: value });
                    break;
                case "IS_REQUIRED":
                    this.setState({ validation: _extends({}, this.state.validation, { isRequired: value }) });
                    break;
                case "IS_READONLY":
                    this.setState({ validation: _extends({}, this.state.validation, { isReadOnly: value }) });
                    break;
                default:
                    return;
            };
            setTimeout(function () {
                return _this2.props.changeState(_this2.state, _this2.props.index);
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'card card-outline-primary' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement('i', { className: 'fa fa-calendar' }),
                    ' Duration Picker ',
                    this.state.title,
                    _react2.default.createElement(
                        'span',
                        { className: 'pull-right cross', onClick: function onClick() {
                                return _this3.props.removeField(_this3.props.index);
                            } },
                        'x'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav nav-tabs' },
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        e.preventDefault();_this3.setState({ tab: 'general' });
                                    }, className: this.state.tab === 'general' ? 'nav-link active' : 'nav-link', href: '/general' },
                                'General'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        e.preventDefault();_this3.setState({ tab: 'validation' });
                                    }, className: this.state.tab === 'validation' ? 'nav-link active' : 'nav-link', href: '/validation' },
                                'Validation'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item', style: {
                                    textAlign: 'right',
                                    position: 'absolute',
                                    right: '15px'
                                } },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        e.preventDefault();_this3.setState({ tab: '' });
                                    }, className: this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link', href: '/hide' },
                                '-'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { hidden: this.state.tab !== 'general', className: 'general' },
                        _react2.default.createElement(
                            'div',
                            { className: 'card-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'alert alert-info text-center' },
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                'NAME'
                                            ),
                                            ' field will be use for the database'
                                        ),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'name' },
                                            'Name'
                                        ),
                                        _react2.default.createElement('input', { type: 'text',
                                            value: this.state.name,
                                            onChange: function onChange(e) {
                                                return _this3.changeValue("NAME", e.target.value);
                                            },
                                            placeholder: 'Name', className: 'form-control' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    { htmlFor: 'title' },
                                    'Label Title'
                                ),
                                _react2.default.createElement('input', { type: 'text',
                                    value: this.state.title,
                                    onChange: function onChange(e) {
                                        return _this3.changeValue("TITLE", e.target.value);
                                    },
                                    placeholder: 'Field Label Title', className: 'form-control' })
                            ),
                            _react2.default.createElement('hr', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-6' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'title' },
                                            'Title From'
                                        ),
                                        _react2.default.createElement('input', { type: 'text',
                                            value: this.state.titleFrom,
                                            onChange: function onChange(e) {
                                                return _this3.changeValue("TITLE_FROM", e.target.value);
                                            },
                                            placeholder: 'Title From',
                                            className: 'form-control' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-6' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'title' },
                                            'Title To'
                                        ),
                                        _react2.default.createElement('input', { type: 'text',
                                            value: this.state.titleTo,
                                            onChange: function onChange(e) {
                                                return _this3.changeValue("TITLE_TO", e.target.value);
                                            },
                                            placeholder: 'Title To',
                                            className: 'form-control' })
                                    )
                                )
                            ),
                            _react2.default.createElement('hr', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'title' },
                                            'Description'
                                        ),
                                        _react2.default.createElement('textarea', {
                                            value: this.state.description,
                                            onChange: function onChange(e) {
                                                return _this3.changeValue("DESCRIPTION", e.target.value);
                                            },
                                            className: 'form-control' })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { hidden: this.state.tab !== 'validation', className: 'general' },
                        _react2.default.createElement(
                            'div',
                            { className: 'card-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-check' },
                                _react2.default.createElement('input', {
                                    value: this.state.validation.isRequired,
                                    onChange: function onChange(e) {
                                        return _this3.changeValue("IS_REQUIRED", e.target.checked);
                                    },
                                    className: 'form-check-input', type: 'checkbox', id: 'isRequired' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-check-label', htmlFor: 'isRequired' },
                                    'Required'
                                )
                            ),
                            _react2.default.createElement('hr', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-check' },
                                _react2.default.createElement('input', {
                                    value: this.state.validation.isReadOnly,
                                    onChange: function onChange(e) {
                                        return _this3.changeValue("IS_READONLY", e.target.checked);
                                    },
                                    className: 'form-check-input',
                                    type: 'checkbox',
                                    id: 'isReadOnly' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-check-label', htmlFor: 'isReadOnly' },
                                    'Readonly'
                                )
                            ),
                            _react2.default.createElement('hr', null)
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'card-footer' })
            );
        }
    }]);

    return DurationPicker;
}(_react.Component);

exports.default = DurationPicker;
