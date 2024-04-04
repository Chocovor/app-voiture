const Toto = props => {
  return (
    <div>
        <h2>{props.name}</h2>
        <button 
            // Compléter cette section
            disabled= {props.leState.disabled}
            onClick= {() => props.reponseToto("Non, je veux regarder la télé!") + console.log('le bouton marche')}
        >Réponse</button>
        
        <p>{props.messageToto}</p>
    </div>
  )
}

export default Toto