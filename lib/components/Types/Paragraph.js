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

var Paragraph = function (_Component) {
    _inherits(Paragraph, _Component);

    function Paragraph(props) {
        _classCallCheck(this, Paragraph);

        var _this = _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).call(this, props));

        _this.state = {
            toolType: 'PARAGRAPH',
            tab: '',
            title: '',
            name: '',
            content: '',
            textColor: '#000000',
            backgroundColor: '#cccccc',
            color: '',
            fontSize: '10',
            align: 'center'
        };
        return _this;
    }

    _createClass(Paragraph, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState(this.props.field);
        }
    }, {
        key: 'fontSizes',
        value: function fontSizes() {
            var sizes = [];
            for (var i = 6; i <= 72; i++) {
                sizes.push(i);
            }
            return sizes;
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
                case "CONTENT":
                    this.setState({ content: value });
                    break;
                case "BACKGROUND_COLOR":
                    this.setState({ backgroundColor: value });
                    break;
                case "TEXT_COLOR":
                    this.setState({ textColor: value });
                    break;
                case "FONT_SIZE":
                    this.setState({ fontSize: value });
                    break;
                case "TEXT_ALIGN":
                    this.setState({ align: value });
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
                { className: 'paragraph' },
                _react2.default.createElement(
                    'div',
                    { className: 'card' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        _react2.default.createElement('i', { className: 'fa fa-paragraph mr-1' }),
                        ' Paragraph ',
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
                                            e.preventDefault();_this3.setState({ tab: 'content' });
                                        }, className: this.state.tab === 'content' ? 'nav-link active' : 'nav-link', href: '/content' },
                                    'Content'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'nav-item' },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick(e) {
                                            e.preventDefault();_this3.setState({ tab: 'style' });
                                        }, className: this.state.tab === 'style' ? 'nav-link active' : 'nav-link', href: '/style' },
                                    'Style'
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
                            { className: 'content', hidden: this.state.tab !== 'content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'card-body' },
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
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'label', htmlFor: 'title' },
                                        'Title'
                                    ),
                                    _react2.default.createElement('input', { id: 'title',
                                        value: this.state.title,
                                        onChange: function onChange(e) {
                                            return _this3.changeValue("TITLE", e.target.value);
                                        },
                                        className: 'form-control',
                                        type: 'text' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'label', htmlFor: 'paragraph' },
                                        'Paragraph'
                                    ),
                                    _react2.default.createElement('textarea', { id: 'paragraph',
                                        value: this.state.content,
                                        onChange: function onChange(e) {
                                            return _this3.changeValue("CONTENT", e.target.value);
                                        },
                                        className: 'form-control' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'style', hidden: this.state.tab !== 'style' },
                            _react2.default.createElement(
                                'div',
                                { className: 'card-body' },
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
                                                { htmlFor: 'Color' },
                                                'Text Color'
                                            ),
                                            _react2.default.createElement('input', {
                                                value: this.state.textColor,
                                                onChange: function onChange(e) {
                                                    return _this3.changeValue("TEXT_COLOR", e.target.value);
                                                },
                                                className: 'form-control', type: 'color' })
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
                                                { htmlFor: 'BackgroundColor' },
                                                'Background Color'
                                            ),
                                            _react2.default.createElement('input', {
                                                value: this.state.backgroundColor,
                                                onChange: function onChange(e) {
                                                    return _this3.changeValue("BACKGROUND_COLOR", e.target.value);
                                                },
                                                className: 'form-control', type: 'color' })
                                        )
                                    )
                                ),
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
                                                { htmlFor: 'Color' },
                                                'Text Align'
                                            ),
                                            _react2.default.createElement(
                                                'select',
                                                {
                                                    value: this.state.align,
                                                    onChange: function onChange(e) {
                                                        return _this3.changeValue("TEXT_ALIGN", e.target.value);
                                                    },
                                                    className: 'form-control' },
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'center' },
                                                    'Center'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'left' },
                                                    'Left'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'right' },
                                                    'Right'
                                                ),
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: 'justify' },
                                                    'Justify'
                                                )
                                            )
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
                                                { htmlFor: 'Color' },
                                                'Font Size'
                                            ),
                                            _react2.default.createElement(
                                                'select',
                                                {
                                                    value: this.state.fontSize,
                                                    onChange: function onChange(e) {
                                                        return _this3.changeValue("FONT_SIZE", e.target.value);
                                                    },
                                                    className: 'form-control' },
                                                this.fontSizes().map(function (size) {
                                                    return _react2.default.createElement(
                                                        'option',
                                                        { key: size, value: size },
                                                        size,
                                                        ' pt'
                                                    );
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Paragraph;
}(_react.Component);

exports.default = Paragraph;
