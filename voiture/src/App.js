import './App.css';
import React , {Component} from 'react';
import Mycars from './components/MyCars';
class App extends Component{

  state = {
    titre: 'Mon Catalogue Voiture'
  }
  
  render(){
    return (
     <div className="App">
      <Mycars title={this.state.titre}/>
     </div>
    );
  }
}

export default App;