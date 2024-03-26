import React from "react";
import Wrapper from  "../components/Wrapper";

const Cars = ({children, color, price}) => {
    //console.log(props.children);
    return  children ? (
        <div style={{margin:'3px', backgroundColor: "pink", width: '400px'}}>
                <p>marque : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>prix moyen : {price}</p>                
        </div>
    ) : (<p style={{margin:'3px', backgroundColor: "red", width: '400px', color:'white'}}>Voiture manquante: Kevin l'a volé</p>)
}

export default Cars