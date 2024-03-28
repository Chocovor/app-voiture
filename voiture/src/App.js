import './App.css';
import React , {Component} from 'react';
import Mycars from './components/MyCars';
class App extends Component{

  state = {
    titre: 'Mon Catalogue Voiture'
  }
  
  // bouton 1
  arrow = () => {
      this.setState({titre : "STORE CLOSED"})
    }
    // bouton 2
  arrow2 = () => {
      this.setState({titre : "STORE OPEN"})
    }
    // bouton 3
  changeViaParam = (titre) => {
    this.setState({
      titre: 'Mon garage de ' + titre
    })
  }
    // bouton 4
  changeViaBind = (param) => {
    console.log(param);
    this.setState({
      titre : 'voiture '+ param +'.'
    })
  }

    //modifier le titre depuis le site
    changeViaInput = (e) => {
      this.setState({
        titre : e.target.value
      })
    }

  render(){
    return (
     <div className="App">
      <Mycars title={this.state.titre}/>
      <button onClick={this.arrow}>Changer le nom en dur</button>
      <button onClick={this.arrow2}>remettre le titre d'origine</button>
      <button onClick={()=>this.changeViaParam('SUPER CAR')}>via param</button>
      <button onClick={this.changeViaBind.bind(this, 'de luxe via Bind')}>via bind</button><br/>
      <p style={{color:'yellow'}}>Modifier le titre à votre guise :</p>
      <input type='text' onChange={this.changeViaInput} value={this.state.titre}/>
     </div>
    )
  }
}

export default App;