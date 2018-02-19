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
                        { this.state.fields.length > 0 ?
                            this.state.fields.map((field, index) => {
                               return (
                                   <div className="fields">
                                       <SingleField key={index} type={field} removeField={() => this.remove(index)} />
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
        fields.push(data);
        this.setState({
            dragActive : false,
            fields : fields
        });
        console.log(data);
    }
}

export default FormContainer;
