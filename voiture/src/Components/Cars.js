import React from "react";

/*
class Cars extends Component{
state= {
        marque: ["Ford", "Mercedes", "BMW", "Audi", "Maserati", "Ferrari", "Honda", "Suzuki", "Nissan","McLaren"], 
        couleur: ["rouge","vert","bleu","jaune","noir","blanc","nuit étoilé","bleu azur","rose bonbon"],
        année: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"]
    }
    render(){
        return(
            <div>
                <h2>Choisissez une voiture : </h2>
                <select name="couleur" id="color">
                    {this.state.couleur.map((e,i)=><option key={i} value={e}>{e}</option>)}
                </select>
                <label htmlFor="year">Année de la voiture :  
                    <input type="text" list="years" name="year" id="year"/>  
                    <datalist name="years" id="years">  
                        {this.state.année.map((e, i) =>  
                            <option key = {i} value={e}/>  )} 
                    </datalist>  
                </label> 
            </div>
        );
    };
};*/
const Cars = ({children, color, price, year}) => {

    //console.log(props.children);
    return  children ? (
        <div style={{margin:'3px', backgroundColor: "pink", width: '300px'}}>
                <p>modele(marque) : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>Age du véhicule : {year}</p>                
        </div>
    ) : (<p style={{margin:'3px',backgroundColor: "red", width: '300px', color:'white', fontSize: "200%"}}>Modèle victime de son succès</p>)
}

export default Cars