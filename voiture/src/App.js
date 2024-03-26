import './App.css';
import React , {Component} from 'react';
import Mycars from './components/MyCars';
class App extends Component{

  state = {
    titre: 'Mon Catalogue Voiture'
  }
  
arrow = () => {
    this.setState({titre : "STORE CLOSED"})
  }
arrow2 = () => {
    this.setState({titre : "Mon Catalogue Voiture"})
  }

  render(){
    return (
     <div className="App">
      <Mycars title={this.state.titre}/>
      <button onClick={this.arrow}>Changer le nom en dur</button>
      <button onClick={this.arrow2}>remettre le titre d'origine</button>
     </div>
    );
  }
}

export default App;