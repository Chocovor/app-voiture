const Welcome = () => {
    return (
        <div>
            {/* Invoquer une fonction "bonjour" qui affichera console.log('Bonjour')*/}
            <button>Invoquer une fonction</button>

            {/*
                Invoquer une foncion "Bonsoir" ave un argument "Bonsoir" 
                et afficher le résultat dans un console.log
            */}
            <button>Invoquer une fonction avec arg "Bonsoir"</button>

            {/* lancer le console.log("Bonne nuit") après le click sans invoquer de fonction */}
            <button>Clg sur le bouton</button>
        </div>
    )
}