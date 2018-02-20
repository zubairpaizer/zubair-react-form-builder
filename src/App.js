import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import FormContainer from './components/FormContainer';
import Text from './components/Types/Text';
import './css/App.css';
var InputTypes = [ 'Checkbox', 'Color', 'Date', 'Email', 'File',
    'Month', 'Number', 'Password', 'Radio', 'Range', 'Search', 'Tel', 'Text', 'Time', 'Url', 'Week'];
var MultiTypes = ['select', 'textarea'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Text InputTypes={InputTypes} />
                </div>
                <div className="col-md-4">
                    <ToolBox InputTypes={InputTypes} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
