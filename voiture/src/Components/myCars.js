import React, {Component} from 'react';
import Cars from './Cars';
import Wrapper from  "../components/Wrapper";
import MyHeader from  "../components/MyHeader"

//Pour les premières voitures
class Mycars extends Component{
    state={
        voitures:[
            {name: 'Talisman', marque:'Renault', color:'noire étoilé', year:5},
            {name: 'Gallardo', marque:'Lamborghini', color:'black', year:8},
            {name: 'Hurus', marque:'Lamborghini', color:'orange', year:5},
            {name: 'Panamera', marque:'Porsche', color:'white', year:2},
            {name: 'RS8', marque:'Audi', color: 'bleu', year:7}
        ],

    // Les 7 dernières voitures
        cars: ["Ford", "Mercedes", "BMW", "Audi", "Maserati", "Ferrari"],
    }

    noCopy = () => {
        alert('merci de ne pas copier le texte')
    }

    addStyle = (e) => {
        e.target.classList.contains ("styled") ? e.target.classList.remove ("styled") : e.target.classList.add ("styled");
    }
    //const year = new Date().getFullYear
    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        }

    render(){
      //  console.log(this);
        return(
            <div>
                <h1>Garage des Hauts Fonctionnaires </h1>
                <Wrapper>
                    <MyHeader 
                        myStyle={this.props.color}
                    >
                        <h2 onMouseOver={this.addStyle}>{this.props.title}</h2>
                        <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat,
                            turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio
                            risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam
                        </p>
                    </MyHeader>     
                </Wrapper>
                <button onClick={this.addTenYear} >+ 10 ans</button>  
                <div style={{display:'flex', flexWrap:"wrap"}}>
                    <Cars color={this.state.voitures[0].color} year={this.state.voitures[0].year + " ans"}>
                        {this.state.voitures[0].name}({this.state.voitures[0].marque})
                    </Cars>
                    <Cars color={this.state.voitures[1].color} year={this.state.voitures[1].year + " ans"}>
                        {this.state.voitures[1].name}({this.state.voitures[1].marque})
                    </Cars> 
                    <Cars color={this.state.voitures[2].color} year={this.state.voitures[2].year + " ans"}>
                        {this.state.voitures[2].name}({this.state.voitures[2].marque})
                    </Cars> 
                    <Cars color={this.state.voitures[3].color} year={this.state.voitures[3].year + "  ans"}>
                        {this.state.voitures[3].name}({this.state.voitures[3].marque})
                    </Cars> 
                    <Cars color={this.state.voitures[4].color} year={this.state.voitures[4].year + "  ans"}>
                        {this.state.voitures[4].name}({this.state.voitures[4].marque})
                    </Cars> 

                    <Cars year="2 ans" color="red">{this.state.cars[0]}</Cars>
                    <Cars year="2 ans" color="black">{this.state.cars[1]}</Cars>
                    <Cars year="2 ans" color="green">{this.state.cars[2]}</Cars>
                    <Cars year="2 ans">{this.state.cars[4]}</Cars>
                    <Cars></Cars>
                    <Cars year="2 ans" color='grey'>{this.state.cars[3]}</Cars>
                    <Cars year="2 ans" color="white">{this.state.cars[5]}</Cars>
                </div>
                <Wrapper>
                    <MyHeader 
                            myStyle={this.props.color}
                    >
                            tableau de bord de modification du titre
                    </MyHeader>
                </Wrapper>  
            </div>  
        )
    }
}

export default Mycars

