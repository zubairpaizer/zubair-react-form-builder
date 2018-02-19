import React, { Component } from 'react';
import SingleField from './SingleField';

class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            dragActive : false,
            fields : []
        }
        this.catchField = this.catchField.bind(this);
    }
    render() {
        return (
            <div className='toolbox' onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.catchField(e)}>
                <div className="card card-default">
                    <div className="card-header">
                        Form Container
                    </div>
                    <div className={ this.state.dragActive ? 'dragActive card-body' : 'card-body'}>
                        <div><pre>{JSON.stringify(this.state.fields, null, 2) }</pre></div>
                        { this.state.fields.length > 0 ?
                            this.state.fields.map((field, index) => {
                               return (
                                   <div className="fields" key={index}>
                                       <SingleField changeState={(e, index) => this.changeChildState(e, index)}
                                                    field={field}
                                                    index={index}
                                                    removeField={() => this.remove(index)} />
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

    remove(index){
        let fields = this.state.fields;
        var f = fields.splice(index, 1);

        this.setState({
            fields : fields
        })
        console.log(fields);
        console.log(f);
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
        let fields = this.state.fields;
        let meta = {
                title: '',
                placeholder: '',
                name: '',
                required : false,
                type: data
        }
        fields.push(meta);
        this.setState({
            dragActive : false,
            fields : fields
        });
        console.log(data);
    }
}

export default FormContainer;
