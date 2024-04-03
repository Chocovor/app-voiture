import React from "react";
// import Counter from "./Counter";
// nodejs library that concatenates classes



const Cars = ({children, color, year}) => {

    //console.log(props.children);
    return  children ? (
        <div style={{margin:'3px', backgroundColor: "pink", width: '300px'}}>
                <p>modele(marque) : {children}</p>
                { color ? <p>couleur : {color}</p> : <p>Couleur: Néant</p>  }
                <p>Année(s) : {year}</p>            
        </div>
    ) : (<p style={{margin:'3px',backgroundColor: "red", width: '300px', color:'white', fontSize: "200%"}}>Modèle victime de son succès</p>)
}

export default Cars