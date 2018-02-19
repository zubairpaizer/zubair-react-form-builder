import React, { Component } from 'react';

class SingleField extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            settingVisible : true,
            placeholder : '',
            name : ''
        }
    }

    toggleSettingSection(){
        console.log(1);
        this.setState({
            settingVisible : !this.state.settingVisible
        })
    }

    render() {
        return (
            <div className="single-field">
                <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                <div className="form-group">
                    <label htmlFor="title" className='label font-weight-bold'>{ this.state.title }</label>
                    <input
                        placeholder={this.props.type}
                        className='form-control'
                        type={this.props.type} />
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
                                        <input value={this.state.title}
                                               onChange={(e) => this.setState({ title : e.target.value })}
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
                                        value={this.state.placeholder}
                                        placeholder='Field Placeholder'
                                        onChange={(e) => this.setState({ placeholder : e.target.value })}
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
                                        value={this.state.name}
                                        disabled={true}
                                        onChange={(e) => this.setState({ name : e.target.value })}
                                        className='form-control'
                                        type="text"/>
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
