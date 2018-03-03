import React, { Component } from 'react';
import $ from "jquery";

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

    componentWillReceiveProps(){
    }

    componentDidUpdate(){
        setTimeout(() => {
            $('.date_time_picker').datetimepicker({
                timeFormat: "hh:mm tt"
            });
            $('.time_picker').timepicker({
                timeFormat: "hh:mm tt"
            });
            $('.date_picker').datepicker();
        }, 0)
    }

    renderField(field, index){
        if(field === undefined || index === -1){
            return;
        }
        if(this.props.previews) {
            let Preview = this.props.previews.filter((tool) => {
                if (tool.states.toolType === field.toolType) {
                    return tool;
                }else{
                    return false;
                }
            })[0];
            if (Preview) {
                let PreviewClonedComponent = React.cloneElement(Preview.preview, field);
                return <div key={index}> { PreviewClonedComponent } </div>
            }
        }

        if(field.toolType === 'SINGLE_FIELD') {
            if(field.type === 'Textarea') {
                return (
                    <div key={index} className="form-group">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <textarea value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                                  type={field.type} readOnly={field.validation.isReadOnly}
                                  required={field.validation.isRequired} />
                    </div>
                );
            }else if(field.type === 'Date'){
                return (
                    <p key={index} className="form-group">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="date_picker form-control"
                               type='text' readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </p>
                );
            }else if(field.type === "Time"){
                return (
                    <p key={index} className="form-group">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="time_picker form-control"
                               type='text' readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </p>
                );
            }else{
                return (
                    <div key={index} className="form-group">
                        <label className="label" htmlFor={field.title}>{field.title}</label>
                        <input value={field.defaultValue} placeholder={field.placeholder} className="form-control"
                               type={field.type} readOnly={field.validation.isReadOnly} required={field.validation.isRequired}/>
                    </div>
                );
            }
        }else if(field.toolType === 'SELECT_FIELD'){
            return (
            <div key={index} className="form-group">
                <label className="label" htmlFor={field.title}>{field.title}</label>
                {
                    field.multiple ?
                        <select className='form-control' multiple={field.multiple}>
                            {
                                field.options.map((option, index) => {
                                    return option.selected ?
                                        <option
                                            selected={option.selected}
                                            key={index} value={option.value}>{option.title}</option>
                                        :  <option key={index} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                        :
                        <select className='form-control' value={field.defaultValue}>
                            {
                                field.options.map((option, index) => {
                                    return <option key={index} value={option.value}>{option.title}</option>
                                })
                            }
                        </select>
                }
            </div>
            )
        }else if(field.toolType === 'CHECK_BOXES'){
            return (
                <div key={index} className="radios">
                    <label className="label" htmlFor="">{ field.title }</label>
                    <div>
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
                    <br />
                </div>
            )
        }else if(field.toolType === 'RADIO_BUTTONS'){
            return (
               <div key={index} className="radios">
                   <label className="label" htmlFor="">{ field.title }</label>
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
                                            id={radio.value} />
                                        <label className="form-check-label" htmlFor={radio.value}>
                                            {radio.title}
                                        </label>
                                    </div>
                                )
                            })
                        }
                   </div>
                   <br />
               </div>
            )
        }else if(field.toolType === "PARAGRAPH"){
            return (
                <div key={index} className="paragraph">
                    <label className="label" hidden={field.title === ""} >{ field.title }</label>
                    <p className="p-2" style={{ textAlign : field.align, backgroundColor : field.backgroundColor, color : field.textColor }}>
                        {field.content}
                    </p>
                </div>
            )
        }else if(field.toolType === "DURATION_PICKER"){
            return (
                <div key={index} className="datetimepicker">
                    <label className="label m-0">{ field.title }</label>
                    <i className="fa fa-arrow-right" style={{ display: 'block',position: 'relative',left: '49%',top: '58px' }} />
                    <div className="row">
                        <div className="col-6 m-0">
                            <label className="label">{ field.titleFrom }</label>
                            <input placeholder="XX/XX/XXXX XX:XX XX" className="date_time_picker form-control" type="text"/>
                        </div>
                        <div className="col-6 m-0">
                            <label className="label">{ field.titleTo }</label>
                            <input placeholder="XX/XX/XXXX XX:XX XX" className="date_time_picker form-control" type="text"/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Preview;