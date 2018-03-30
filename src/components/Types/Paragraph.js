import React, { Component } from 'react'

class Paragraph extends Component{

    constructor(props){
        super(props);
        this.state = {
            toolType : 'PARAGRAPH',
            tab : '',
            title : '',
            name : '',
            content : '',
            textColor : '#000000',
            backgroundColor : '#cccccc',
            color : '',
            fontSize : '10',
            align : 'center'
        }
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    fontSizes(){
        let sizes = [];
        for(let i = 6; i <= 72; i++){
            sizes.push(i);
        }
        return sizes;
    }


    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "CONTENT" :
                this.setState( { content : value } )
                break;
            case "BACKGROUND_COLOR" :
                this.setState( { backgroundColor : value } )
                break;
            case "TEXT_COLOR" :
                this.setState( { textColor : value } )
                break;
            case "FONT_SIZE" :
                this.setState( { fontSize : value } )
                break;
            case "TEXT_ALIGN" :
                this.setState( { align : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return (
            <div className="paragraph">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-paragraph mr-1"></i> Paragraph { this.state.title }
                        <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                    </div>
                    <div className="card-body">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'content' }) }} className={this.state.tab === 'content' ? 'nav-link active' : 'nav-link'} href="/content">Content</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'style' })}} className={this.state.tab === 'style' ? 'nav-link active' : 'nav-link'} href="/style">Style</a>
                            </li>
                            <li className="nav-item" style={{
                                textAlign: 'right',
                                position: 'absolute',
                                right: '15px',
                            }}>
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                            </li>
                        </ul>
                        <div className="content" hidden={this.state.tab !== 'content'}>
                            <div className="card-body">
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
                                <div className="form-group">
                                    <label className="label" htmlFor="title">Title</label>
                                    <input id="title"
                                           value={this.state.title}
                                           onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                           className='form-control'
                                           type="text"/>
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="paragraph">Paragraph</label>
                                    <textarea id="paragraph"
                                              value={this.state.content}
                                              onChange={(e) => this.changeValue("CONTENT", e.target.value)}
                                              className='form-control'/>
                                </div>
                            </div>
                        </div>
                        <div className="style" hidden={this.state.tab !== 'style'}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="Color">Text Color</label>
                                            <input
                                                value={this.state.textColor}
                                                onChange={(e) => this.changeValue("TEXT_COLOR", e.target.value)}
                                                className='form-control' type="color"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="BackgroundColor">Background Color</label>
                                            <input
                                                value={this.state.backgroundColor}
                                                onChange={(e) => this.changeValue("BACKGROUND_COLOR", e.target.value)}
                                                className='form-control' type="color"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="Color">Text Align</label>
                                            <select
                                                value={this.state.align}
                                                onChange={(e) => this.changeValue("TEXT_ALIGN", e.target.value)}
                                                className="form-control">
                                                <option value="center">Center</option>
                                                <option value="left">Left</option>
                                                <option value="right">Right</option>
                                                <option value="justify">Justify</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="Color">Font Size</label>
                                            <select
                                                value={this.state.fontSize}
                                                onChange={(e) => this.changeValue("FONT_SIZE", e.target.value)}
                                                className="form-control">
                                                {
                                                    this.fontSizes().map((size) => {
                                                        return <option key={size} value={size}>{size} pt</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Paragraph;