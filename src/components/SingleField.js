import React, { Component } from 'react';

class SingleField extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            settingVisible : true,
            placeholder : '',
            name : '',
            required: false,
            type : ''
        };
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount(){
        this.setState({
            type : this.props.field.type
        })
    }

    toggleSettingSection(){
        this.setState({
            settingVisible : !this.state.settingVisible
        })
    }

    changeValue(state, value){
        switch (state){
            case "TITLE" :
                this.setState( { title : value } )
             break;
            case "PLACEHOLDER" :
                this.setState( { placeholder : value } )
                break;
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "REQUIRED" :
                this.setState( { required : value } )
                break;
        };
        let invokeState = {
            title : this.state.title,
            placeholder : this.state.placeholder,
            name : this.state.name,
            required: this.state.required,
            type : this.state.type
        };
        setTimeout(() => {
            return this.props.changeState(invokeState, this.props.index);
        }, 0)
    }

    render() {
        return (
            <div className="single-field">
                <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                <div className="form-group">
                    <label htmlFor="title" className='label font-weight-bold'>{ this.state.title }</label>
                    <p htmlFor="title" className='text-capitalize text-center font-weight-bold'>{ this.props.field.type }</p>
                    <hr />
                    <div className="setting p-2">
                        <p className='font-weight-bold'>
                            <span>Form Setting</span>
                            <span className='pull-right cross' onClick={() => this.toggleSettingSection()}>↓↑</span>
                        </p>
                        <table hidden={this.state.settingVisible} className='table setting'>
                            <tbody>
                            <tr>
                                <td>
                                    Title
                                </td>
                                <td>
                                    <div className="form-group">
                                        <input onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                               id='title'
                                               placeholder='Field Title'
                                               className='form-control'
                                               type="text"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Place Holder
                                </td>
                                <td>
                                    <input
                                        onChange={(e) => this.changeValue("PLACEHOLDER", e.target.value)}
                                        placeholder='Field Placeholder'
                                        className='form-control'
                                        type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    <input
                                        onChange={(e) => this.changeValue("NAME", e.target.value)}
                                        className='form-control'
                                        type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Required
                                </td>
                                <td>
                                    <input
                                        onChange={(e) => this.changeValue("REQUIRED", e.target.checked)}
                                        type="checkbox"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleField;
