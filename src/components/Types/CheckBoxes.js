import React, { Component } from 'react';
import * as _ from 'lodash';

class CheckBoxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab : '',
            inline : false,
            toolType: "CHECK_BOXES",
            title : '',
            name : '',
            defaultValue : '',
            description : '',
            validation : {
                isReadOnly: false,
                isRequired: false,
                min : 6,
                max : 6
            },
            duplicate : false,
            checkBoxes : []
        }
        this.removeOption = this.removeOption.bind(this);
        this.duplicates = this.duplicates.bind(this);

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
            case "INLINE" :
                this.setState( { inline : value } )
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
                    <i className="fa fa-check-square mr-1"></i> Check Boxes { this.state.title }
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
                            <div className="form-check">
                                <input
                                    value={this.state.inline}
                                    onChange={(e) => this.changeValue("INLINE", e.target.checked)}
                                    className="form-check-input" type="checkbox" id="inLine" />
                                <label className="form-check-label" htmlFor="inLine">
                                    Inline
                                </label>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-12">
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
                            <p hidden={!this.state.duplicate} className="alert text-center alert-danger"><strong>Duplicate</strong> Values Found</p>
                            {
                                this.state.checkBoxes ?
                                    <table className='table text-center'>
                                        <tbody>
                                        {
                                            this.state.checkBoxes.map((checkbox, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="checkbox">
                                                                <input
                                                                    autoFocus={true}
                                                                    value={this.state.checkBoxes[index].selected}
                                                                    onChange={(e) => this.changeOptionValue(index, e.target.checked, "SELECTED")}
                                                                    type='checkbox' />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <input
                                                                placeholder='Title'
                                                                autoFocus={true}
                                                                value={this.state.checkBoxes[index].title}
                                                                onChange={(e) => this.changeOptionValue(index, e.target.value, "TITLE")}
                                                                id={checkbox.title}
                                                                type='text'
                                                                className='form-control' />
                                                        </td>
                                                        <td>
                                                            <input
                                                                placeholder='Value'
                                                                value={this.state.checkBoxes[index].value}
                                                                onChange={(e) => this.changeOptionValue(index, e.target.value, "VALUE")}
                                                                id={checkbox.value}
                                                                type='text'
                                                                className='form-control' />
                                                        </td>
                                                        <td style={{ verticalAlign : 'middle' }}>
                                                            <span onClick={() => this.removeOption(index)} className="cross pull-right">x</span>
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
        )
    }

    changeOptionValue(index, value, state){
        let checkBoxes = this.state.checkBoxes;
        let checkBox = {};
        if(state === "TITLE"){
            checkBox = {
                ...checkBoxes[index],
                title : value,
            }
        }else if(state === 'SELECTED'){
            checkBox = {
                ...checkBoxes[index],
                selected: !checkBoxes[index].selected
            }
        }else if(state === 'VALUE'){
            checkBox = {
                ...checkBoxes[index],
                value : value
            }
        }else{
            checkBox = {
                ...checkBoxes[index],
            }
        }
        checkBoxes[index] = checkBox;
        this.setState({
            checkBoxes : checkBoxes
        });

        this.duplicates();

        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    duplicates(){
        let checkBoxes = this.state.checkBoxes;
        let u = _.uniqBy(checkBoxes, 'value');
        if(!_.isEqual(checkBoxes, u)){
            this.setState({
                duplicate: true
            });
        }else{
            this.setState({
                duplicate: false
            });
        }
    }

    removeOption(index){
        let checkBoxes = this.state.checkBoxes;
        checkBoxes.splice(index, 1);
        this.setState({
            checkBoxes : checkBoxes
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    addOption(){
        let checkBox = {
            title : '',
            value : '',
            selected: false
        }
        let checkBoxes = this.state.checkBoxes;
        checkBoxes.push(checkBox)
        this.setState({
            checkBoxes : checkBoxes
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }
}

export default CheckBoxes;