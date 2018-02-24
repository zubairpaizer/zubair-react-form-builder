import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import FormContainer from './components/FormContainer';
import './css/App.css';

class Ahsan extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 : 1,
            num2 : 2
        }
    }
    render(){
        return <h1>Ahsan</h1>
    }
}


class CustomComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 : 1,
            num2 : 2
        }
    }
    render(){
        return <h1>Custom</h1>
    }
}

let customs = [
    {
        container : <CustomComponent />,
        preview : <Ahsan />,
        toolbox : {
            title : 'Component',
            icon : 'fa fa-user',
            name : 'CUSTOM_COM'
        },
        states : {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    },
    {
        container : <Ahsan />,
        preview : <CustomComponent />,
        toolbox : {
            title : 'Ahsan',
            icon : 'fa fa-user',
            name : 'ASHAN'
        },
        states : {
            toolType: 'AHSAN',
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
                    <FormContainer custom={customs} />
                </div>
                <div className="col-md-4">
                    <ToolBox custom={customs} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
