import React, { Component } from 'react';
var InputTypes = [ 'Checkbox', 'Color', 'Date', 'Email', 'File',
    'Month', 'Number', 'Password', 'Radio', 'Range', 'Search', 'Tel', 'Text', 'Time', 'Url', 'Week', 'Textarea'];
class SingleField extends Component{
    constructor(props){
        super(props);
        this.state = {
            tab : '',
            title : '',
            type : 'Text',
            name : '',
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
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "PLACEHOLDER" :
                this.setState( { placeholder : value } )
                break;
            case "TYPE" :
                this.setState( { type : value } )
                break;
            case "DESCRIPTION" :
                this.setState( { description : value } )
                break;
            case "DEFAULT_VALUE" :
                this.setState( { defaultValue : value } )
                break;
            case "IS_REQUIRED" :
                this.setState( { validation : { ...this.state.validation, isRequired : value }})
                break;
            case "IS_READONLY" :
                this.setState( { validation : { ...this.state.validation, isReadOnly : value }})
                break;
            case "MAX" :
                this.setState( { validation : { ...this.state.validation, max : value }})
                break;
            case "MIN" :
                this.setState( { validation : { ...this.state.validation, min : value }})
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return(
            <div className="card card-outline-primary">
                <div className="card-header">
                    <i className="fa fa-wpforms mr-1"></i> Single Field { this.state.title }
                    <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'general' }) }} className={this.state.tab === 'general' ? 'nav-link active' : 'nav-link'} href="/general">General</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'validation' })}} className={this.state.tab === 'validation' ? 'nav-link active' : 'nav-link'} href="/validation">Validation</a>
                        </li>
                        <li className="nav-item" style={{
                            textAlign: 'right',
                            position: 'absolute',
                            right: '15px',
                        }}>
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                        </li>
                    </ul>
                    <div hidden={this.state.tab !== 'general'} className="general">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <p className="alert alert-info text-center">
                                            <strong>NAME</strong> field will be use for the database
                                        </p>
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                            value={this.state.name}
                                            onChange={(e) => this.changeValue("NAME", e.target.value)}
                                            placeholder='Name' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Type</label>
                                        <select
                                            onChange={(e) => this.changeValue("TYPE", e.target.value)}
                                            className='form-control'
                                            defaultValue={this.state.type}>
                                            {
                                                InputTypes.map((type) => {
                                                    return <option value={type} key={type}>{ type }</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Default</label>
                                        <input type="text"
                                               value={this.state.defaultValue}
                                               onChange={(e) => this.changeValue("DEFAULT_VALUE", e.target.value)}
                                               placeholder='Default Value'
                                               className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Label Title</label>
                                        <input type="text"
                                               value={this.state.title}
                                               onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                               placeholder='Field Label Title' className='form-control' />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Placeholder</label>
                                        <input type="text"
                                               value={this.state.placeholder}
                                               onChange={(e) => this.changeValue("PLACEHOLDER", e.target.value)}
                                               placeholder='Field Placeholder' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="title">Description</label>
                                        <textarea
                                            value={this.state.description}
                                            onChange={(e) => this.changeValue("DESCRIPTION", e.target.value)}
                                            className='form-control'>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div hidden={this.state.tab !== 'validation'} className="general">
                        <div className="card-body">
                            <div className="form-check">
                                <input
                                    value={this.state.validation.isRequired}
                                    onChange={(e) => this.changeValue("IS_REQUIRED", e.target.checked)}
                                    className="form-check-input" type="checkbox" id="isRequired" />
                                    <label className="form-check-label" htmlFor="isRequired">
                                        Required
                                    </label>
                            </div>
                            <hr />

                            <div className="form-check">
                                <input
                                    value={this.state.validation.isReadOnly}
                                    onChange={(e) => this.changeValue("IS_READONLY", e.target.checked)}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isReadOnly" />
                                <label className="form-check-label" htmlFor="isReadOnly">
                                    Readonly
                                </label>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Max Characters</label>
                                        <input
                                            value={this.state.validation.max}
                                            onChange={(e) => this.changeValue("MAX", e.target.value)}
                                            type="number" placeholder='6' className='form-control' />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Min Characters</label>
                                        <input
                                            value={this.state.validation.min}
                                            onChange={(e) => this.changeValue("MIN", e.target.value)}
                                            type="number" placeholder='6' className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    }
}

export default SingleField;