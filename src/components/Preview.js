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
        if(field.toolType === 'SINGLE_FIELD') {
            if(field.type === 'Textarea') {
                return (
                    <div key={index} className="form-group">
                        <label htmlFor={field.title}>{field.title}</label>
                        <textarea value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                                  type={field.type} readOnly={field.validation.isReadOnly}
                                  required={field.validation.isRequired}></textarea>
                    </div>
                );
            }else{
                return (
                    <div key={index} className="form-group">
                        <label htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                               type={field.type} readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </div>
                );
            }
        }else if(field.toolType === 'SELECT_FIELD'){
            return (
            <div key={index} className="form-group">
                <label htmlFor={field.title}>{field.title}</label>
                <select value={field.defaultValue}
                        className='form-control'
                        multiple={field.multiple}>
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
        }else if(field.toolType === 'CHECK_BOXES'){
            return (
                <div className="radios">
                    <label htmlFor="">{ field.title }</label>
                    {
                        field.checkBoxes.map((checkbox, index) => {
                            return(
                                <div key={index} className={ field.inline ? "form-check-inline" : "form-check"}>
                                    <input
                                        name={checkbox.value}
                                        checked={checkbox.selected}
                                        className="form-check-input"
                                        type="checkbox"
                                        id={checkbox.value} />
                                    <label className="form-check-label" htmlFor={checkbox.value}>
                                        {checkbox.title}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else if(field.toolType === 'RADIO_BUTTONS'){
            return (
               <div className="radios">
                    <label htmlFor="">{ field.title }</label>
                   <div className="radios-buttons">
                        {
                            field.radios.map((radio, index) => {
                                return (
                                    <div key={index} className={field.inline ? "form-check-inline" : "form-check"}>
                                        <input
                                            name={ field.multiple ? index : 'radio-group' }
                                            className="form-check-input"
                                            type="radio"
                                            checked={radio.selected || index === field.defaultValue}
                                            value={radio.selected}
                                            id={radio.selected} />
                                        <label className="form-check-label" htmlFor={radio.value}>
                                            {radio.title}
                                        </label>
                                    </div>
                                )
                            })
                        }
                   </div>
              </div>
            )
        }else if(field.toolType === 'PARAGRAPH'){
            return (
                <div key={index} className="paragraph">
                    <span hidden={field.title === ""} >{ field.title }</span>
                    <p className="p-2" style={{ textAlign : field.align, backgroundColor : field.backgroundColor, color : field.textColor }}>
                        {field.content}
                    </p>
                </div>
            )
        }

    }
}

export default Preview;