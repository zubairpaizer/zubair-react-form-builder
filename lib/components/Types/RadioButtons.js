'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtons = function (_Component) {
    _inherits(RadioButtons, _Component);

    function RadioButtons(props) {
        _classCallCheck(this, RadioButtons);

        var _this = _possibleConstructorReturn(this, (RadioButtons.__proto__ || Object.getPrototypeOf(RadioButtons)).call(this, props));

        _this.state = {
            tab: '',
            inline: false,
            multiple: false,
            toolType: "RADIO_BUTTONS",
            title: '',
            name: '',
            defaultValue: '',
            description: '',
            validation: {
                isReadOnly: false,
                isRequired: false,
                min: 6,
                max: 6
            },
            radios: [],
            duplicate: false
        };
        _this.removeOption = _this.removeOption.bind(_this);
        return _this;
    }

    _createClass(RadioButtons, [{
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
                case "MAX":
                    this.setState({ validation: _extends({}, this.state.validation, { max: value }) });
                    break;
                case "MIN":
                    this.setState({ validation: _extends({}, this.state.validation, { min: value }) });
                    break;
                case "INLINE":
                    this.setState({ inline: value });
                    break;
                case "MULTIPLE":
                    this.setState({ multiple: value });
                    break;
                default:
                    return;
            };
            setTimeout(function () {
                return _this2.props.changeState(_this2.state, _this2.props.index);
            }, 0);
        }
    }, {
        key: 'removeOption',
        value: function removeOption(index) {
            var _this3 = this;

            var radios = this.state.radios;
            radios.splice(index, 1);
            this.setState({
                radios: radios
            });
            this.duplicates();
            setTimeout(function () {
                return _this3.props.changeState(_this3.state, _this3.props.index);
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                { className: 'card card-outline-primary' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement('i', { className: 'fa fa-circle mr-1' }),
                    ' Radio Buttons ',
                    this.state.title,
                    _react2.default.createElement(
                        'span',
                        { className: 'pull-right cross', onClick: function onClick() {
                                return _this4.props.removeField(_this4.props.index);
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
                                        e.preventDefault();_this4.setState({ tab: 'general' });
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
                                        e.preventDefault();_this4.setState({ tab: 'validation' });
                                    }, className: this.state.tab === 'validation' ? 'nav-link active' : 'nav-link', href: '/validation' },
                                'Validation'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        e.preventDefault();_this4.setState({ tab: 'options' });
                                    }, className: this.state.tab === 'options' ? 'nav-link active' : 'nav-link', href: '/options' },
                                'Options'
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
                                        e.preventDefault();_this4.setState({ tab: '' });
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
                                                return _this4.changeValue("NAME", e.target.value);
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
                                        return _this4.changeValue("TITLE", e.target.value);
                                    },
                                    placeholder: 'Field Label Title', className: 'form-control' })
                            ),
                            _react2.default.createElement('hr', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-check-inline' },
                                _react2.default.createElement('input', {
                                    value: this.state.multiple,
                                    onChange: function onChange(e) {
                                        return _this4.changeValue("MULTIPLE", e.target.checked);
                                    },
                                    className: 'form-check-input', type: 'checkbox', id: 'multiple' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-check-label', htmlFor: 'isRequired' },
                                    'Multiple Selection'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-check-inline' },
                                _react2.default.createElement('input', {
                                    value: this.state.inline,
                                    onChange: function onChange(e) {
                                        return _this4.changeValue("INLINE", e.target.checked);
                                    },
                                    className: 'form-check-input', type: 'checkbox', id: 'inLine' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-check-label', htmlFor: 'inLine' },
                                    'Inline'
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
                                                return _this4.changeValue("DESCRIPTION", e.target.value);
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
                                { className: 'form-check-inline' },
                                _react2.default.createElement('input', {
                                    value: this.state.validation.isRequired,
                                    onChange: function onChange(e) {
                                        return _this4.changeValue("IS_REQUIRED", e.target.checked);
                                    },
                                    className: 'form-check-input', type: 'checkbox', id: 'isRequired' }),
                                _react2.default.createElement(
                                    'label',
                                    { className: 'form-check-label', htmlFor: 'isRequired' },
                                    'Required'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-check-inline' },
                                _react2.default.createElement('input', {
                                    value: this.state.validation.isReadOnly,
                                    onChange: function onChange(e) {
                                        return _this4.changeValue("IS_READONLY", e.target.checked);
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
                                            'Max Characters'
                                        ),
                                        _react2.default.createElement('input', {
                                            value: this.state.validation.max,
                                            onChange: function onChange(e) {
                                                return _this4.changeValue("MAX", e.target.value);
                                            },
                                            type: 'number', placeholder: '6', className: 'form-control' })
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
                                            'Min Characters'
                                        ),
                                        _react2.default.createElement('input', {
                                            value: this.state.validation.min,
                                            onChange: function onChange(e) {
                                                return _this4.changeValue("MIN", e.target.value);
                                            },
                                            type: 'number', placeholder: '6', className: 'form-control' })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { hidden: this.state.tab !== 'options', className: 'options' },
                        _react2.default.createElement(
                            'div',
                            { className: 'card-body' },
                            _react2.default.createElement(
                                'p',
                                { hidden: !this.state.duplicate, className: 'alert text-center alert-danger' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Duplicate'
                                ),
                                ' Values Found'
                            ),
                            this.state.radios ? _react2.default.createElement(
                                'table',
                                { className: 'table text-center' },
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    this.state.radios.map(function (checkbox, index) {
                                        return _react2.default.createElement(
                                            'tr',
                                            { key: index },
                                            _this4.state.multiple ? _react2.default.createElement(
                                                'td',
                                                { style: { verticalAlign: 'middle' } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'radio' },
                                                    _react2.default.createElement('input', {
                                                        value: _this4.state.radios[index].selected,
                                                        onChange: function onChange(e) {
                                                            return _this4.changeOptionValue(index, e.target.checked, "SELECTED");
                                                        },
                                                        type: 'checkbox' })
                                                )
                                            ) : _react2.default.createElement('td', { hidden: true }),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                _react2.default.createElement('input', {
                                                    placeholder: 'Title',
                                                    autoFocus: true,
                                                    value: _this4.state.radios[index].title,
                                                    onChange: function onChange(e) {
                                                        return _this4.changeOptionValue(index, e.target.value, "TITLE");
                                                    },
                                                    id: checkbox.title,
                                                    type: 'text',
                                                    className: 'form-control' })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                _react2.default.createElement('input', {
                                                    placeholder: 'Value',
                                                    value: _this4.state.radios[index].value,
                                                    onChange: function onChange(e) {
                                                        return _this4.changeOptionValue(index, e.target.value, "VALUE");
                                                    },
                                                    id: checkbox.value,
                                                    type: 'text',
                                                    className: 'form-control' })
                                            ),
                                            !_this4.state.multiple ? _react2.default.createElement(
                                                'td',
                                                { style: { verticalAlign: 'middle' } },
                                                _react2.default.createElement('input', {
                                                    name: 'default',
                                                    value: _this4.state.defaultValue,
                                                    onChange: function onChange(e) {
                                                        return _this4.changeOptionValue(index, e.target.checked, "DEFAULT_VALUE");
                                                    },
                                                    id: checkbox.value,
                                                    type: 'radio' })
                                            ) : _react2.default.createElement('td', { hidden: true }),
                                            _react2.default.createElement(
                                                'td',
                                                { style: { verticalAlign: 'middle' } },
                                                _react2.default.createElement(
                                                    'span',
                                                    { onClick: function onClick() {
                                                            return _this4.removeOption(index);
                                                        }, className: 'cross pull-right' },
                                                    'x'
                                                )
                                            )
                                        );
                                    })
                                )
                            ) : _react2.default.createElement('span', null),
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick() {
                                        return _this4.addOption();
                                    }, className: 'btn form-control btn-sm btn-dark' },
                                'Add'
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'card-footer' })
            );
        }
    }, {
        key: 'changeOptionValue',
        value: function changeOptionValue(index, value, state) {
            var _this5 = this;

            var radios = this.state.radios;
            var radio = {};
            if (state === "DEFAULT_VALUE") {
                this.setState({
                    defaultValue: index
                });
            }
            if (state === "TITLE") {
                radio = _extends({}, radios[index], {
                    title: value
                });
            } else if (state === 'SELECTED') {
                radio = _extends({}, radios[index], {
                    selected: !radios[index].selected
                });
            } else if (state === 'VALUE') {
                radio = _extends({}, radios[index], {
                    value: value
                });
            } else {
                radio = _extends({}, radios[index]);
            }

            radios[index] = radio;
            this.setState({
                radios: radios
            });
            this.duplicates();
            setTimeout(function () {
                return _this5.props.changeState(_this5.state, _this5.props.index);
            }, 0);
        }
    }, {
        key: 'duplicates',
        value: function duplicates() {
            var radios = this.state.radios;
            var u = _.uniqBy(radios, 'value');
            if (!_.isEqual(radios, u)) {
                this.setState({
                    duplicate: true
                });
            } else {
                this.setState({
                    duplicate: false
                });
            }
        }
    }, {
        key: 'addOption',
        value: function addOption() {
            var _this6 = this;

            var radio = {
                title: '',
                value: '',
                selected: false
            };
            var radios = this.state.radios;
            radios.push(radio);
            this.setState({
                radios: radios
            });
            this.duplicates();
            setTimeout(function () {
                return _this6.props.changeState(_this6.state, _this6.props.index);
            }, 0);
        }
    }]);

    return RadioButtons;
}(_react.Component);

exports.default = RadioButtons;
