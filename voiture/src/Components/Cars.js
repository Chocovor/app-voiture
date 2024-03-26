import React from "react";

const Cars = ({children, color}) => {
    //console.log(props.children);
    return  children ? (
        <div style={{margin:'auto', backgroundColor: "pink", width: '400px'}}> 
            <p>marque : {children}</p>
            { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }                    
        </div>
    ) : (<p style={{margin:'auto', backgroundColor: "red", width: '400px', color:'white'}}>Voiture manquante: Kevin l'a volé</p>)
}

export default Cars