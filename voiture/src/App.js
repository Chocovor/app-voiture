import './App.css';
import React , {Component} from 'react';
import Mycars from './Components/myCars.js'

class App extends Component{
  
  render(){
    return (
     <div className="App">
      <Mycars>
      </Mycars>
     </div>
    );
  }
}

export default App;