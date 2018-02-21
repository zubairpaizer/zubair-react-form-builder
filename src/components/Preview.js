import React, { Component } from 'react';

class Preview extends Component{
    render(){
        return(
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                this.props.fields.map((field, index) => {
                                    return this.renderField(field, index)
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderField(field, index){
        console.log(field);
        if(field.type === 'Textarea') {
            return (
                <div key={index} className="form-group">
                    <label htmlFor={field.title}>{field.title}</label>
                    <textarea value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                              type={field.type} readOnly={field.validation.isReadOnly} required={field.validation.isRequired}></textarea>
                </div>
            );
        }else if(field.type === 'SELECT'){
            return (
            <div key={index} className="form-group">
                <label htmlFor={field.title}>{field.title}</label>
                <select className='form-control' multiple={field.multiple}>
                    {
                        field.options.map((option, index) => {
                          return option.selected ?
                              <option
                              selected={option.selected}
                              key={index} value={option.value}>{option.title}</option>
                              :  <option
                                  key={index} value={option.value}>{option.title}</option>
                        })
                    }
                </select>
            </div>
            )
        }else{
            return (
                <div key={index} className="form-group">
                    <label htmlFor={field.title}>{field.title}</label>
                    <input value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                           type={field.type} readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                </div>
            );
        }
    }
}

export default Preview;