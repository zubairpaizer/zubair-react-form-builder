import React, { Component } from 'react';
import SingleField from './Types/SingleField';
import SelectField from "./Types/SelectField";
import CheckBoxes from './Types/CheckBoxes';
import Preview from './Preview';
import RadioButtons from "./Types/RadioButtons";
import Paragraph from "./Types/Paragraph";



class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dragActive : false,
            fields : [],
        }
        this.catchField = this.catchField.bind(this);
    }
    render() {
        return (
            <div className='toolbox' onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.catchField(e)}>
                <Preview fields={this.state.fields} id='previewModal' />
                <div className="card card-default">
                    <div className="card-header">
                        <span className="pull-left">Form Container</span>
                        <div className="actions pull-right">
                            <button data-toggle="modal" data-target="#previewModal" className="btn btn-sm btn-dark">Preview</button>
                        </div>
                    </div>
                    <div className={ this.state.dragActive ? 'dragActive card-body' : 'card-body'}>
                        { this.state.fields.length > 0 ?
                            this.state.fields.map((field, index) => {
                               return (
                                    this.renderToolBoxItems(field, index)
                               )
                            })
                            : <span>I m waiting your step</span>
                        }
                    </div>
                </div>
            </div>
        );
    }

    renderToolBoxItems(field, index){
        return (
            <div className="fields" key={index}>
                { this.renderTool(field, index) }
                <hr />
            </div>
        )
    }

    renderTool(field, index){
        if(field.toolType === 'SELECT_FIELD'){
            return (
                <div className='selectField'>
                    <SelectField key={index} changeState={(e, index) => this.changeChildState(e, index)}
                                 field={field}
                                 index={index}
                                 removeField={() => this.remove(index)} />
                </div>
            )
        }else if(field.toolType === 'SINGLE_FIELD'){
            return (
                <SingleField changeState={(e, index) => this.changeChildState(e, index)}
                             field={field}
                             key={index}
                             index={index}
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
                <RadioButtons changeState={(e, index) => this.changeChildState(e, index)}
                            field={field}
                            index={index}
                            key={index}
                            removeField={() => this.remove(index)} />
            )
        }else if(field.toolType === 'PARAGRAPH'){
            return (
                <Paragraph changeState={(e, index) => this.changeChildState(e, index)}
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
            this.setState( { fields : fields } );
        }
    }

    remove(indexR){
        let fields = this.state.fields;
        delete fields[indexR];
        this.setState({
            fields : fields
        });
    }

    allowDrop(e){
        e.preventDefault();
        this.setState({
           dragActive : true
        });
    }

    catchField(e){
        e.preventDefault();
        let data = e.dataTransfer.getData("dragField");
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
    }
}

export default FormContainer;
