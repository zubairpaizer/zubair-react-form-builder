import React, { Component } from 'react';
import SingleField from './Types/SingleField';
import SelectField from "./Types/SelectField";
import CheckBoxes from './Types/CheckBoxes';
import Preview from './Preview';
import RadioButtons from "./Types/RadioButtons";
import Paragraph from "./Types/Paragraph";
import DurationPicker from "./Types/DurationPicker";

class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dragActive : false,
            fields : [],
            orders : [],
            change : false,
            nameDuplicate: false
        }
        this.popForm = this.popForm.bind(this);
        this.catchField = this.catchField.bind(this);
        this.resetStateOrder = this.resetStateOrder.bind(this);
        this.debugStateOrder = this.debugStateOrder.bind(this);
    }

    componentWillMount(){
        if(this.props.updateOnMount === true) {
            this.props.updateForm((form) => {
                this.setState({
                    fields : form,
                    orders : form
                })
            });
        }
    }

    resetStateOrder(){
        let order = [];
        let $ = window.$;
        let self = this;
        let list = this.tooList;
        let states = self.state.fields;
        $(list).children().each((i, l) => {
            let index = $(l).attr('data-index');
            order.push(states[index]);
        });
        self.setState({
            orders : order
        });
    }

    ifDuplicated(){
        if(this.state.nameDuplicate){
            return {
                backgroundColor: 'rgb(255, 167, 160)'
            }
        }else{
            return {
                backgroundColor: 'inherit'
            }
        }
    }

    render() {
        return (
            <div className='toolbox' ref={(c) => this._toolBoxContainer = c}>
                {
                    this.props.debug === true ?
                        <pre>
                            { JSON.stringify(this.debugStateOrder(), null, 2) }
                        </pre>
                        :
                        <span hidden={true}></span>
                }
                <Preview
                    previews={ this.props.custom }
                    fields={this.state.orders} id='previewModal' />
                <div className="card card-default" style={this.ifDuplicated()}>
                    <div className="card-header">
                        <span className="pull-left">Form Container</span>
                        <div className="actions pull-right">
                            <button data-toggle="modal" data-target="#previewModal" className="btn btn-sm btn-dark">Preview</button>
                            { ' ' }
                            { 
                                this.props.loader ? 
                                <button disabled hidden={!this.props.onSave} className="btn btn-sm btn-success"><i className="fa fa-spin fa-spinner"></i></button>
                                :
                                <button hidden={!this.props.onSave} onClick={() => this.popForm()} className="btn btn-sm btn-success">Save</button>
                            }
                        </div>
                    </div>
                    <div className={ this.state.dragActive ? 'dragActive card-body' : 'card-body'}>
                        { this.state.nameDuplicate ? 
                            <p className="alert alert-danger">
                                <strong>Please resolve following errors.</strong>  
                                <ul>
                                    <li>Name field cannot be empty</li>
                                    <li>Remove whitespaces from name field</li>
                                    <li>Duplicate name field found</li>
                                </ul> 
                            </p>  : '' 
                        }
                        <div ref={(l) => this.tooList = l} className="list-group">
                            { this.state.fields.length > 0 ?
                                this.state.fields.map((field, index) => {
                                   return (
                                        this.renderToolBoxItems(field, index)
                                   )
                                })
                                : <div>
                                    <p style={{
                                        textAlign: 'center',
                                        padding: '2em',
                                        fontSize: '18pt',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        color: '#aaa',
                                        backgroundColor: '#eee'
                                    }}>Drag a tool</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    popForm(){
        let states = this.state.orders;
        let d = states.filter((data) => {
            return data !== null && data !== undefined
        });
        return this.props.onSave(d);
    }

    debugStateOrder(){
        let states = this.state.orders;
        let d = states.filter((data) => {
            return data !== null && data !== undefined
        });
        return d;
    }

    componentDidMount(){
        let list = this.tooList;
        let toolBoxContainer = this._toolBoxContainer;
        let self = this;
        var $ = window.$;
        $( function() {
            $( toolBoxContainer ).droppable({
                drop: function( event, ui ) {
                    let tool = $(ui.draggable[0]).attr('data-tool');
                    if(tool !== undefined){
                        self.catchField(tool);
                    }
                },
                over : function (event, ui) {
                    self.setState({
                        dragActive : true,
                    })
                },
                out : function (event, ui) {
                    self.setState({
                        dragActive : false,
                    })
                }
            });
            $( list ).sortable({
                update : function(event, ui){
                    self.setState({
                        dragActive : false,
                    })
                    self.resetStateOrder();
                },
                out : function(event, ui){
                    self.setState({
                        dragActive : false,
                    })
                }
            });
            $( list ).disableSelection();
        } );
    }

    renderToolBoxItems(field, index){
        return (
            <div key={index} data-index={index}>
                { this.renderTool(field, index) }
               <hr/>
            </div>
        )
    }

    renderTool(field, index){
        if(this.props.custom) {
            let Component = this.props.custom.filter((tool) => {
                if (tool.states.toolType === field.toolType) {
                    return tool;
                }else{
                    return false;
                }
            })[0];

            if (Component) {
                let props = {
                    fields : field,
                    index : index,
                    key: index,
                    changeState : (e, index) => this.changeChildState(e, index),
                    removeField : () => this.remove(index)
                }
                let ClonedComponent = React.cloneElement(Component.container, props);
                return ClonedComponent;
            }
        }
        if(field.toolType === 'SELECT_FIELD'){
            return (
                    <SelectField changeState={(e, index) => this.changeChildState(e, index)}
                                 field={field}
                                 index={index}
                                 key={index}
                                 removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'SINGLE_FIELD'){
            return (
                    <SingleField changeState={(e, index) => this.changeChildState(e, index)}
                                 field={field}
                                 index={index}
                                 key={index}
                                 removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'CHECK_BOXES'){
            return (
                    <CheckBoxes changeState={(e, index) => this.changeChildState(e, index)}
                                field={field}
                                index={index}
                                key={index}
                                removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'RADIO_BUTTONS'){
            return (
                <RadioButtons
                            changeState={(e, index) => this.changeChildState(e, index)}
                            field={field}
                            key={index}
                            index={index}
                            removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'PARAGRAPH'){
            return (
                <Paragraph changeState={(e, index) => this.changeChildState(e, index)}
                           field={field}
                           key={index}
                           index={index}
                           removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'DURATION_PICKER'){
            return (
                <DurationPicker 
                             changeState={(e, index) => this.changeChildState(e, index)}
                             field={field}
                             index={index}
                             key={index}
                             removeField={() => this.remove(index)} />
            )
        }
    }

    changeChildState(e, index){
        if (index !== -1) {
            let fields = this.state.fields;
            fields[index] = e;
            this.setState( { fields : fields, change : this.state.change });
        }
        this.resetStateOrder();
        this.nameDuplicateReflector();
    }

    nameDuplicateReflector(){
        // duplicate names
        let f = this.state.fields;
        var arr = [];
        f.forEach((i) => {
            if(i.name !== undefined && i.name.trim() !== "" && i.name.indexOf(' ') === -1){
                arr.push(i.name);
            }
        });
        let unique = arr.filter(function (value, index, self) { 
            return self.indexOf(value) === index;
        });
        if(f.length !== unique.length){
            this.setState({
                nameDuplicate: true
            });
        }else{
            this.setState({
                nameDuplicate: false
            });
        }
    }

    remove(indexR){
        let fields = this.state.fields;
        fields.splice(indexR, 1);
        this.setState({
            fields : fields,
            change : this.state.change
        });
         this.resetStateOrder();
         this.nameDuplicateReflector();
    }

    catchField(data){
        if(this.props.custom) {
            let toolItem = this.props.custom.filter((tool) => {
                if (tool.toolbox.name === data) {
                    return tool;
                }else{
                    return false;
                }
            })[0];

            if (toolItem) {
                let fields = this.state.fields;
                fields.push(toolItem.states);
                this.setState({
                    dragActive: false,
                    fields: fields
                });
                this.resetStateOrder();
                this.nameDuplicateReflector();
                return;
            }
        }

        let tools = ["SINGLE_FIELD", "SELECT_FIELD", "CHECK_BOXES", "RADIO_BUTTONS", "PARAGRAPH", "DURATION_PICKER"];
        if(tools.indexOf(data) === -1){
            this.setState({
                dragActive : false,
            });
            return;
        }
        var meta = {};
        if(data === 'SINGLE_FIELD'){
            meta = {
                title : 'Title',
                type : 'Text',
                toolType : 'SINGLE_FIELD',
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                }
            }
        }else if(data === 'DURATION_PICKER'){
            meta = {
                titleTo : 'Title',
                titleFrom : 'Title',
                title : 'Title',
                type : 'DURATION',
                toolType : 'DURATION_PICKER',
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                }
            }
        }else if(data === 'SELECT_FIELD'){
            meta = {
                title : 'Title',
                type : 'SELECT',
                toolType : 'SELECT_FIELD',
                multiple: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                options : []
            }
        }else if(data === 'CHECK_BOXES'){
            meta = {
                title : 'Title',
                toolType : 'CHECK_BOXES',
                inline: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                checkBoxes : []
            }
        }
        else if(data === 'RADIO_BUTTONS'){
            meta = {
                title : 'Title',
                toolType : 'RADIO_BUTTONS',
                multiple : false,
                inline: false,
                defaultValue : '',
                placeholder : '',
                description : '',
                validation : {
                    isReadOnly: false,
                    isRequired: false,
                    min : 6,
                    max : 6
                },
                radios : []
            }
        }else if(data === 'PARAGRAPH'){
            meta = {
                title : 'Title',
                toolType : 'PARAGRAPH',
                content : '',
                textColor : '',
                backgroundColor : '',
                color : '',
                fontSize : '',
                align : ''
            }
        }
        let fields = this.state.fields;
        fields.push(meta);
        this.setState({
            dragActive : false,
            fields : fields
        });
        this.resetStateOrder();
        this.nameDuplicateReflector();
    }
}

export default FormContainer;
