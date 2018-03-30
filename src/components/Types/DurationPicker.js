import React, { Component } from 'react';
class DurationPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            tab : '',
            title : '',
            titleFrom : '',
            titleTo : '',
            type : 'DURATION',
            name : '',
            toolType : 'DURATION_PICKER',
            defaultValue : '',
            placeholder : '',
            description : '',
            validation : {
                isReadOnly: false,
                isRequired: false,
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
            case "TITLE_FROM" :
                this.setState( { titleFrom : value } )
                break;
            case "TITLE_TO" :
                this.setState( { titleTo : value } )
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
                    <i className="fa fa-calendar"></i> Duration Picker { this.state.title }
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
                            <div className="form-group">
                                <label htmlFor="title">Label Title</label>
                                <input type="text"
                                       value={this.state.title}
                                       onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                       placeholder='Field Label Title' className='form-control' />
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Title From</label>
                                        <input type="text"
                                               value={this.state.titleFrom}
                                               onChange={(e) => this.changeValue("TITLE_FROM", e.target.value)}
                                               placeholder='Title From'
                                               className='form-control' />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="title">Title To</label>
                                        <input type="text"
                                               value={this.state.titleTo}
                                               onChange={(e) => this.changeValue("TITLE_TO", e.target.value)}
                                               placeholder='Title To'
                                               className='form-control' />
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
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    }
}

export default DurationPicker;