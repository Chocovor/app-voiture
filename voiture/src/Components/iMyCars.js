import React, {Component} from 'react';
import Cars from './Cars';
//import Wrapper from  "./Wrapper";
//import MyHeader from  "./MyHeader";

//Pour les premières voitures
class Mycars extends Component{
    state={
        voitures:[
            {name: 'Talisman', marque:'Renault', color:'noire étoilé', year:2019},
            {name: 'Gallardo', marque:'Lamborghini', color:'black', year:2018},
            {name: 'Hurus', marque:'Lamborghini', color:'orange', year:2021},
            {name: 'Panamera', marque:'Porsche', color:'white', year:2023},
            {name: 'RS8', marque:'Audi', color: 'bleu', year:2017},
            {name: 'X6', marque:'BMW' ,color:'gris', year:2014}
    
        ],

    // Les 7 dernières voitures dans les methodes 1 & 2
        cars: ["Ford", "Mercedes", "BMW", "Audi", "Maserati", "Ferrari"],
    }

    noCopy = () => {
        alert('merci de ne pas copier le texte')
    }

    addStyle = (e) => {
        e.target.classList.contains ("styled") ? e.target.classList.remove ("styled") : e.target.classList.add ("styled");
    }
    
    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }
    

    render(){
      //  console.log(this);
      const year2 = new Date().getFullYear();

        return(
            <div>
                <h1>Garage des Hauts Fonctionnaires </h1>
                
                {/*<Wrapper>
                    <MyHeader 
                        myStyle={this.props.color}
                    >
                        <h2 onMouseOver={this.addStyle}>{this.props.title}</h2>
                        <p onCopy={this.noCopy}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat,... 
                        </p>
                    </MyHeader>     
                </Wrapper>*/}

                <button onClick={this.addTenYears} >cliquez-ici pour vieillir les voitures de 10 ans</button>

                <p style={{color:'white'}}>Quatrième méthode</p>
                <div style={{display:'flex', flexWrap:"wrap"}}>
                {/* Affiche les voitures */}
                {this.state.voitures.map(({name,color,year, marque}, index)=>{
                    return(
                        <div key={index}>
                        <Cars 
                            children={name +' '+ marque}
                            color={color} 
                            year={year2 - year}/>
                        </div>
                        )
                    })
                }
                </div>


                <p style={{color:'white'}}>Troisème méthode</p>

                <div style={{display:'flex', flexWrap:"wrap"}}>
                 {this.state.voitures.map(voiture=>{
                    return(
                        <Cars color={voiture.color} year={ year2 - voiture.year}>
                            {voiture.name} ({voiture.marque})
                        </Cars>
                    )
                 })
                }
                </div>
                <p style={{color:'white'}}>1ère et 2ème méthode en commentaire</p>
                {/*}
                <Wrapper>
                    Deuxième méthode
                    <div style={{display:'flex', flexWrap:"wrap"}}> 
                        <Cars color={this.state.voitures[0].color} year={year-this.state.voitures[0].year + " ans"}>
                            {this.state.voitures[0].name}({year-this.state.voitures[0].marque})
                        </Cars>
                        <Cars color={this.state.voitures[1].color} year={year-this.state.voitures[1].year + " ans"}>
                            {this.state.voitures[1].name}({this.state.voitures[1].marque})
                        </Cars> 
                        <Cars color={this.state.voitures[2].color} year={year-this.state.voitures[2].year + " ans"}>
                            {this.state.voitures[2].name}({this.state.voitures[2].marque})
                        </Cars> 
                        <Cars color={this.state.voitures[3].color} year={year-this.state.voitures[3].year + "  ans"}>
                            {this.state.voitures[3].name}({this.state.voitures[3].marque})
                        </Cars> 
                        <Cars color={this.state.voitures[4].color} year={year-this.state.voitures[4].year + "  ans"}>
                            {this.state.voitures[4].name}({this.state.voitures[4].marque})
                        </Cars> 
                    </div>
                    Première méthode  
                    <div style={{display:'flex', flexWrap:"wrap"}}>  
                        <Cars year="2 ans" color="red">{this.state.cars[0]}</Cars>
                        <Cars year="2 ans" color="black">{this.state.cars[1]}</Cars>
                        <Cars year="2 ans" color="green">{this.state.cars[2]}</Cars>
                        <Cars year="2 ans">{this.state.cars[4]}</Cars>
                        <Cars></Cars>
                        <Cars year="2 ans" color='grey'>{this.state.cars[3]}</Cars>
                        <Cars year="2 ans" color="white">{this.state.cars[5]}</Cars>
                    </div>
                </Wrapper>

                <Wrapper>
                    <MyHeader 
                            myStyle={this.props.color}
                    >
                            tableau de bord de modification du titre
                    </MyHeader>
            </Wrapper>  */}
            </div>  
        )
    }
}
export default Mycars

