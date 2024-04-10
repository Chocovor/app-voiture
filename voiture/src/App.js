import './App.css';
import React , {Component} from 'react';
// import Mycars from './components/iMyCars';
// import Welcome from './/components/Welcome';
// import Maman from './components/Maman';
import Form from './components/Form';
import PostalCard from './components/Exo7';
import Btn from './components/CustomBtn'
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
    // bouton 3 : on serait obligé d'utiliser toutes les method si il y en avait plusieurs
  changeViaParam = (titre) => {
    this.setState({
      titre: 'Mon garage de ' + titre
    })
  }
    // bouton 4 : en choisissant la ou les method(s) que l'on veut réutiliser
  changeViaBind = (param) => {
    //console.log(param);
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

    sayHello =  () => {
       alert('Bonjour !')
    }
    sayThankYou = ()=> {
       alert("Merci pour votre achat.")
    }
    sayGoodBye = () => {
      alert("Au revoir.")
    }

  render(){
    const myClass = this.props.head ?  'red' : 'blue' ;
    const success = {background:"green", color:'white', borderRadius: '20px'}
    const blue = {background:"lightblue", color:'black', borderRadius: '28px'}
    const ovale = {color:'black', borderRadius: '50%', border: 'yellow solid'}


    return (
     
     <div className="App">
     <Btn btnStyle={success} handleClick={this.sayHello}>say Hello</Btn>
     <Btn btnStyle={blue} handleClick={this.sayThankYou}>remerciement</Btn>
     <Btn btnStyle={ovale} handleClick={this.sayGoodBye}>Au revoir</Btn>

      <PostalCard/>
      
      <Form head={true}/> 
      <p className={myClass}>Je suis rouge ou bleu</p>
      {/*<Mycars title={this.state.titre}/>
     <button onClick={this.arrow}>Changer le nom en dur</button>
      <button onClick={this.arrow2}>remettre le titre d'origine</button>
      <button onClick={()=>this.changeViaParam('SUPER CAR')}>via param</button>
      <button onClick={this.changeViaBind.bind(this, 'de luxe via Bind')}>via bind</button><br/>
      <p style={{color:'yellow'}}>Modifier le titre à votre guise :</p>
      <input type='text' onChange={this.changeViaInput} value={this.state.titre}/>
      <Welcome/>
    <Maman/>*/}
     </div>
    )
  }
}
export default App;