import './App.css';
import React , {Component} from 'react';
import Mycars from './components/MyCars';
class App extends Component{

  state = {
    titre: 'Mon Catalogue Voiture'
  }
  
arrow = (e) => {
    this.setState({titre : "Notre Catalogue Voiture ;)"})
  }

  render(){
    return (
     <div className="App">
      <Mycars title={this.state.titre}/>
      <button onClick={this.arrow}>Changer le nom en dur</button>
     </div>
    );
  }
}

export default App;