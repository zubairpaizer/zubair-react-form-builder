import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import FormContainer from './components/FormContainer';
import './css/App.css';

let Tools = [
    {
        title : 'Single Field',
        name : 'SINGLE_FIELD'
    },
    {
        title : 'Select',
        name : 'SELECT_FIELD'
    },
    {
        title : 'Check Boxes',
        name : 'CHECK_BOXES'
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <FormContainer />
                </div>
                <div className="col-md-4">
                    <ToolBox tools={Tools} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
