import React from "react";

const Cars = ({children, color}) => {
    //console.log(props.children);
    return  children ? (
        <div style={{ backgroundColor: "pink", width: '400px'}}> 
            <p>marque : {children}</p>
            { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }                    
        </div>
    ) : <p style={{ backgroundColor: "red", width: '400px'}}>Voiture manquante</p>
}

export default Cars