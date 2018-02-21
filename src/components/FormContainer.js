import React, { Component } from 'react';
import SingleField from './Types/SingleField';
import Preview from './Preview';
import SelectField from "./Types/SelectField";



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
                                   <div className="fields" key={index}>
                                       { field.type === "SELECT" ?
                                            <SelectField changeState={(e, index) => this.changeChildState(e, index)}
                                                         field={field}
                                                         index={index}
                                                         removeField={() => this.remove(index)} />
                                           :
                                           <SingleField changeState={(e, index) => this.changeChildState(e, index)}
                                                        field={field}
                                                        index={index}
                                                        removeField={() => this.remove(index)} />
                                       }
                                       <hr />
                                   </div>
                               )
                            })
                            : <span>I m waiting your step</span>
                        }
                    </div>
                </div>
            </div>
        );
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
