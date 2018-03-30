'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SingleField = require('./Types/SingleField');

var _SingleField2 = _interopRequireDefault(_SingleField);

var _SelectField = require('./Types/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _CheckBoxes = require('./Types/CheckBoxes');

var _CheckBoxes2 = _interopRequireDefault(_CheckBoxes);

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _RadioButtons = require('./Types/RadioButtons');

var _RadioButtons2 = _interopRequireDefault(_RadioButtons);

var _Paragraph = require('./Types/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _DurationPicker = require('./Types/DurationPicker');

var _DurationPicker2 = _interopRequireDefault(_DurationPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = function (_Component) {
    _inherits(FormContainer, _Component);

    function FormContainer(props) {
        _classCallCheck(this, FormContainer);

        var _this = _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).call(this, props));

        _this.state = {
            dragActive: false,
            fields: [],
            orders: [],
            change: false,
            nameDuplicate: false
        };
        _this.popForm = _this.popForm.bind(_this);
        _this.catchField = _this.catchField.bind(_this);
        _this.resetStateOrder = _this.resetStateOrder.bind(_this);
        _this.debugStateOrder = _this.debugStateOrder.bind(_this);
        return _this;
    }

    _createClass(FormContainer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.props.updateOnMount === true) {
                this.props.updateForm(function (form) {
                    _this2.setState({
                        fields: form,
                        orders: form
                    });
                });
            }
        }
    }, {
        key: 'resetStateOrder',
        value: function resetStateOrder() {
            var order = [];
            var $ = window.$;
            var self = this;
            var list = this.tooList;
            var states = self.state.fields;
            $(list).children().each(function (i, l) {
                var index = $(l).attr('data-index');
                order.push(states[index]);
            });
            self.setState({
                orders: order
            });
        }
    }, {
        key: 'ifDuplicated',
        value: function ifDuplicated() {
            if (this.state.nameDuplicate) {
                return {
                    backgroundColor: 'rgb(255, 167, 160)'
                };
            } else {
                return {
                    backgroundColor: 'inherit'
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'toolbox', ref: function ref(c) {
                        return _this3._toolBoxContainer = c;
                    } },
                this.props.debug === true ? _react2.default.createElement(
                    'pre',
                    null,
                    JSON.stringify(this.debugStateOrder(), null, 2)
                ) : _react2.default.createElement('span', { hidden: true }),
                _react2.default.createElement(_Preview2.default, {
                    previews: this.props.custom,
                    fields: this.state.orders, id: 'previewModal' }),
                _react2.default.createElement(
                    'div',
                    { className: 'card card-default', style: this.ifDuplicated() },
                    _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        _react2.default.createElement(
                            'span',
                            { className: 'pull-left' },
                            'Form Container'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'actions pull-right' },
                            _react2.default.createElement(
                                'button',
                                { 'data-toggle': 'modal', 'data-target': '#previewModal', className: 'btn btn-sm btn-dark' },
                                'Preview'
                            ),
                            ' ',
                            this.props.loader ? _react2.default.createElement(
                                'button',
                                { disabled: true, hidden: !this.props.onSave, className: 'btn btn-sm btn-success' },
                                _react2.default.createElement('i', { className: 'fa fa-spin fa-spinner' })
                            ) : _react2.default.createElement(
                                'button',
                                { hidden: !this.props.onSave, onClick: function onClick() {
                                        return _this3.popForm();
                                    }, className: 'btn btn-sm btn-success' },
                                'Save'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: this.state.dragActive ? 'dragActive card-body' : 'card-body' },
                        this.state.nameDuplicate ? _react2.default.createElement(
                            'p',
                            { className: 'alert alert-danger' },
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Please resolve following errors.'
                            ),
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Name field cannot be empty'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Remove whitespaces from name field'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    'Duplicate name field found'
                                )
                            )
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { ref: function ref(l) {
                                    return _this3.tooList = l;
                                }, className: 'list-group' },
                            this.state.fields.length > 0 ? this.state.fields.map(function (field, index) {
                                return _this3.renderToolBoxItems(field, index);
                            }) : _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'p',
                                    { style: {
                                            textAlign: 'center',
                                            padding: '2em',
                                            fontSize: '18pt',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            color: '#aaa',
                                            backgroundColor: '#eee'
                                        } },
                                    'Drag a tool'
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'popForm',
        value: function popForm() {
            var states = this.state.orders;
            var d = states.filter(function (data) {
                return data !== null && data !== undefined;
            });
            return this.props.onSave(d);
        }
    }, {
        key: 'debugStateOrder',
        value: function debugStateOrder() {
            var states = this.state.orders;
            var d = states.filter(function (data) {
                return data !== null && data !== undefined;
            });
            return d;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var list = this.tooList;
            var toolBoxContainer = this._toolBoxContainer;
            var self = this;
            var $ = window.$;
            $(function () {
                $(toolBoxContainer).droppable({
                    drop: function drop(event, ui) {
                        var tool = $(ui.draggable[0]).attr('data-tool');
                        if (tool !== undefined) {
                            self.catchField(tool);
                        }
                    },
                    over: function over(event, ui) {
                        self.setState({
                            dragActive: true
                        });
                    },
                    out: function out(event, ui) {
                        self.setState({
                            dragActive: false
                        });
                    }
                });
                $(list).sortable({
                    update: function update(event, ui) {
                        self.setState({
                            dragActive: false
                        });
                        self.resetStateOrder();
                    },
                    out: function out(event, ui) {
                        self.setState({
                            dragActive: false
                        });
                    }
                });
                $(list).disableSelection();
            });
        }
    }, {
        key: 'renderToolBoxItems',
        value: function renderToolBoxItems(field, index) {
            return _react2.default.createElement(
                'div',
                { key: index, 'data-index': index },
                this.renderTool(field, index),
                _react2.default.createElement('hr', null)
            );
        }
    }, {
        key: 'renderTool',
        value: function renderTool(field, index) {
            var _this4 = this;

            if (this.props.custom) {
                var _Component2 = this.props.custom.filter(function (tool) {
                    if (tool.states.toolType === field.toolType) {
                        return tool;
                    } else {
                        return false;
                    }
                })[0];

                if (_Component2) {
                    var props = {
                        fields: field,
                        index: index,
                        key: index,
                        changeState: function changeState(e, index) {
                            return _this4.changeChildState(e, index);
                        },
                        removeField: function removeField() {
                            return _this4.remove(index);
                        }
                    };
                    var ClonedComponent = _react2.default.cloneElement(_Component2.container, props);
                    return ClonedComponent;
                }
            }
            if (field.toolType === 'SELECT_FIELD') {
                return _react2.default.createElement(_SelectField2.default, { changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    index: index,
                    key: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            } else if (field.toolType === 'SINGLE_FIELD') {
                return _react2.default.createElement(_SingleField2.default, { changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    index: index,
                    key: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            } else if (field.toolType === 'CHECK_BOXES') {
                return _react2.default.createElement(_CheckBoxes2.default, { changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    index: index,
                    key: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            } else if (field.toolType === 'RADIO_BUTTONS') {
                return _react2.default.createElement(_RadioButtons2.default, {
                    changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    key: index,
                    index: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            } else if (field.toolType === 'PARAGRAPH') {
                return _react2.default.createElement(_Paragraph2.default, { changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    key: index,
                    index: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            } else if (field.toolType === 'DURATION_PICKER') {
                return _react2.default.createElement(_DurationPicker2.default, {
                    changeState: function changeState(e, index) {
                        return _this4.changeChildState(e, index);
                    },
                    field: field,
                    index: index,
                    key: index,
                    removeField: function removeField() {
                        return _this4.remove(index);
                    } });
            }
        }
    }, {
        key: 'changeChildState',
        value: function changeChildState(e, index) {
            if (index !== -1) {
                var fields = this.state.fields;
                fields[index] = e;
                this.setState({ fields: fields, change: this.state.change });
            }
            this.resetStateOrder();
            this.nameDuplicateReflector();
        }
    }, {
        key: 'nameDuplicateReflector',
        value: function nameDuplicateReflector() {
            // duplicate names
            var f = this.state.fields;
            var arr = [];
            f.forEach(function (i) {
                if (i.name !== undefined && i.name.trim() !== "" && i.name.indexOf(' ') === -1) {
                    arr.push(i.name);
                }
            });
            var unique = arr.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
            if (f.length !== unique.length) {
                this.setState({
                    nameDuplicate: true
                });
            } else {
                this.setState({
                    nameDuplicate: false
                });
            }
        }
    }, {
        key: 'remove',
        value: function remove(indexR) {
            var fields = this.state.fields;
            fields.splice(indexR, 1);
            this.setState({
                fields: fields,
                change: this.state.change
            });
            this.resetStateOrder();
            this.nameDuplicateReflector();
        }
    }, {
        key: 'catchField',
        value: function catchField(data) {
            if (this.props.custom) {
                var toolItem = this.props.custom.filter(function (tool) {
                    if (tool.toolbox.name === data) {
                        return tool;
                    } else {
                        return false;
                    }
                })[0];

                if (toolItem) {
                    var _fields = this.state.fields;
                    _fields.push(toolItem.states);
                    this.setState({
                        dragActive: false,
                        fields: _fields
                    });
                    this.resetStateOrder();
                    this.nameDuplicateReflector();
                    return;
                }
            }

            var tools = ["SINGLE_FIELD", "SELECT_FIELD", "CHECK_BOXES", "RADIO_BUTTONS", "PARAGRAPH", "DURATION_PICKER"];
            if (tools.indexOf(data) === -1) {
                this.setState({
                    dragActive: false
                });
                return;
            }
            var meta = {};
            if (data === 'SINGLE_FIELD') {
                meta = {
                    title: 'Title',
                    type: 'Text',
                    toolType: 'SINGLE_FIELD',
                    defaultValue: '',
                    placeholder: '',
                    description: '',
                    validation: {
                        isReadOnly: false,
                        isRequired: false,
                        min: 6,
                        max: 6
                    }
                };
            } else if (data === 'DURATION_PICKER') {
                meta = {
                    titleTo: 'Title',
                    titleFrom: 'Title',
                    title: 'Title',
                    type: 'DURATION',
                    toolType: 'DURATION_PICKER',
                    defaultValue: '',
                    placeholder: '',
                    description: '',
                    validation: {
                        isReadOnly: false,
                        isRequired: false,
                        min: 6,
                        max: 6
                    }
                };
            } else if (data === 'SELECT_FIELD') {
                meta = {
                    title: 'Title',
                    type: 'SELECT',
                    toolType: 'SELECT_FIELD',
                    multiple: false,
                    defaultValue: '',
                    placeholder: '',
                    description: '',
                    validation: {
                        isReadOnly: false,
                        isRequired: false,
                        min: 6,
                        max: 6
                    },
                    options: []
                };
            } else if (data === 'CHECK_BOXES') {
                meta = {
                    title: 'Title',
                    toolType: 'CHECK_BOXES',
                    inline: false,
                    defaultValue: '',
                    placeholder: '',
                    description: '',
                    validation: {
                        isReadOnly: false,
                        isRequired: false,
                        min: 6,
                        max: 6
                    },
                    checkBoxes: []
                };
            } else if (data === 'RADIO_BUTTONS') {
                meta = {
                    title: 'Title',
                    toolType: 'RADIO_BUTTONS',
                    multiple: false,
                    inline: false,
                    defaultValue: '',
                    placeholder: '',
                    description: '',
                    validation: {
                        isReadOnly: false,
                        isRequired: false,
                        min: 6,
                        max: 6
                    },
                    radios: []
                };
            } else if (data === 'PARAGRAPH') {
                meta = {
                    title: 'Title',
                    toolType: 'PARAGRAPH',
                    content: '',
                    textColor: '',
                    backgroundColor: '',
                    color: '',
                    fontSize: '',
                    align: ''
                };
            }
            var fields = this.state.fields;
            fields.push(meta);
            this.setState({
                dragActive: false,
                fields: fields
            });
            this.resetStateOrder();
            this.nameDuplicateReflector();
        }
    }]);

    return FormContainer;
}(_react.Component);

exports.default = FormContainer;
