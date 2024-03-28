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
            {name: 'Panamera', marque:'Porsche', color:'white', year:2}
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
                <button>+ 10 ans</button>  
                <div style={{display:'flex', flexWrap:"wrap"}}>
                    <Cars color={this.state.voitures[0].color}>
                        {this.state.voitures[0].name}({this.state.voitures[0].marque})
                    </Cars>
                    <Cars color={this.state.voitures[1].color}>
                        {this.state.voitures[1].name}({this.state.voitures[1].marque})
                    </Cars> 
                    <Cars color={this.state.voitures[2].color}>
                        {this.state.voitures[2].name}({this.state.voitures[2].marque})
                    </Cars> 
                    <Cars color={this.state.voitures[3].color}>
                        {this.state.voitures[3].name}({this.state.voitures[3].marque})
                    </Cars> 

                    <Cars year="2024" color="red">{this.state.cars[0]}</Cars>
                    <Cars year="2024" color="black">{this.state.cars[1]}</Cars>
                    <Cars year="2024" color="green">{this.state.cars[2]}</Cars>
                    <Cars year="2024">{this.state.cars[4]}</Cars>
                    <Cars></Cars>
                    <Cars year="2024" color='grey'>{this.state.cars[3]}</Cars>
                    <Cars year="2024" color="white">{this.state.cars[5]}</Cars>
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

