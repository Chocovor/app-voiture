import React from "react";
import Wrapper from  "../components/Wrapper";

const Cars = ({children, color, price}) => {
    //console.log(props.children);
    return  children ? (
        <div style={{margin:'auto', backgroundColor: "pink", width: '400px'}}>
            <Wrapper> 
                <p>marque : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>prix moyen : {price}</p>
            </Wrapper>                   
        </div>
    ) : (<p style={{margin:'auto', backgroundColor: "red", width: '400px', color:'white'}}>Voiture manquante: Kevin l'a volé</p>)
}

export default Cars