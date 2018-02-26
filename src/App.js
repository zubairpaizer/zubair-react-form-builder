import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import FormContainer from './components/FormContainer';
import './css/App.css';

class TestComponent extends  Component{
    constructor(props){
        super(props)
        this.state = {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    }

    changeValue(value){
        this.setState({
            num1 : value
        })
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return (
            <div className="conainer">
                <span className='pull-right cross' onClick={() => this.props.removeField(this.props.index)}>x</span>
                <input onChange={(e) => this.changeValue(e.target.value)} type="text"/>
            </div>
        )
    }
}

class TestPreview extends  Component{
    render(){
        return <h3>TestPreview</h3>
    }
}


const myCustoms = [
    {
        container : <TestComponent />,
        preview : <TestPreview />,
        toolbox : {
            title : 'Test',
            icon : 'fa fa-user',
            name : 'CUSTOM_COM'
        },
        states : {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    < FormContainer custom={ myCustoms } />
                </div>
                <div className="col-md-4">
                    < ToolBox custom={ myCustoms } />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
