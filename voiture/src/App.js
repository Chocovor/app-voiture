import './App.css';
import React , {Component} from 'react';
import Mycars from './components/MyCars';
class App extends Component{

  state = {
    titre: 'Mon Catalogue Voiture',
    color: 'green',
    backgroundColor: 'black'
  }
  
  render(){
    return (
     <div className="App">
      <Mycars 
        title={this.state.titre}
        color={this.state.color}
        backgroundColor={this.state.backgroundColor}
      />
     </div>
    );
  }
}

export default App;