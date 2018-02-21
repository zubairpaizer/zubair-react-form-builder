import React, { Component } from 'react';

class SelectField extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab : '',
            type: 'SELECT',
            toolType : 'SELECT_FIELD',
            title : '',
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
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(stateFor, value){
        switch (stateFor){
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
            case "MULTIPLE" :
                this.setState( { multiple : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render() {
        return (
            <div className="card card-outline-primary">
                <div className="card-header">
                    Select Field
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
                        <li className="nav-item">
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'options' })}} className={this.state.tab === 'options' ? 'nav-link active' : 'nav-link'} href="/options">Options</a>
                        </li>
                    </ul>
                    <div hidden={this.state.tab !== 'general'} className="general">
                        <div className="card-body">
                            <div className="form-check">
                                <input
                                    value={this.state.multiple}
                                    onChange={(e) => this.changeValue("MULTIPLE", e.target.checked)}
                                    className="form-check-input" type="checkbox" id="multiple" />
                                <label className="form-check-label" htmlFor="isRequired">
                                    Multiple Selection
                                </label>
                            </div>
                            <hr />
                            <div className="row">
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
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Label Title</label>
                                        <input type="text"
                                               value={this.state.title}
                                               onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                               placeholder='Field Label Title' className='form-control' />
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
                    <div hidden={this.state.tab !== 'options'} className="options">
                        <div className="card-body">
                            {
                                this.state.options ?
                                    <table className='table text-center'>
                                        <tbody>
                                        {
                                        this.state.options.map((option, index) => {
                                        return (
                                                <tr key={index}>
                                                    { this.state.multiple ?
                                                        <td>
                                                            <div className="radio">
                                                                {
                                                                   <input
                                                                       onChange={(e) => this.changeOptionValue(index, e.target.checked, "SELECTED")}
                                                                       type='checkbox' />
                                                                }
                                                            </div>
                                                        </td> : <td></td>
                                                    }
                                                    <td>
                                                        <input
                                                            placeholder='Title'
                                                            onChange={(e) => this.changeOptionValue(index, e.target.value, "TITLE")}
                                                            id={option.title}
                                                            type='text'
                                                            className='form-control' />
                                                    </td>
                                                    <td>
                                                        <input
                                                            placeholder='Value'
                                                            onChange={(e) => this.changeOptionValue(index, e.target.value, "VALUE")}
                                                            id={option.value}
                                                            type='text'
                                                            className='form-control' />
                                                    </td>
                                                </tr>
                                        )
                                     }) }
                                        </tbody>
                                    </table>
                                :<span></span>
                            }
                         <button onClick={() => this.addOption()} className="btn form-control btn-sm btn-dark">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    }

    changeOptionValue(index, value, state){
        let options = this.state.options;
        let option = {};
        if(state === "TITLE"){
            option = {
                ...options[index],
                title : value,
            }
        }else if(state === 'SELECTED')
            option = {
                ...options[index],
                selected : !options[index].selected
            }
        else{
            option = {
                ...options[index],
                value : value
            }
        }
        options[index] = option;
        this.setState({
           options : options
        });

        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    addOption(){
        let option = {
            title : '',
            value : '',
            selected: false
        }
        let options = this.state.options;
        options.push(option)
        this.setState({
           options : options
        });
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }
}

export default SelectField;
