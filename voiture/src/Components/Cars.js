import React from "react";
import Wrapper from  "../components/Wrapper";

/*state= {
    arrayCar : [marque, couleur, année]
}*/
const Cars = ({children, color, price, year}) => {

    //console.log(props.children);
    return  children ? (
        <div style={{margin:'3px', backgroundColor: "pink", width: '300px'}}>
                <p>marque : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>prix moyen : {price}</p>
                <p>année : {year}</p>                
        </div>
    ) : (<p style={{margin:'3px',backgroundColor: "red", width: '300px', color:'white', fontSize: "200%"}}>Modèle victime de son succès</p>)
}

export default Cars