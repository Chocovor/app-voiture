const Welcome = () => {

    const bonjour = () => console.log("Bonjour!");
    const bonsoir = argument => console.log(argument);

    return (
            <div>
                {/* Invoquer une fonction "bonjour" qui affichera console.log('Bonjour')*/}
                    <button onClick={bonjour}>Invoquer une fonction</button>

                {/* Invoquer une foncion "Bonsoir" ave un argument "Bonsoir" et afficher le résultat dans un console.log*/}
                    <button onClick={() => bonsoir("bonsoir")}>Invoquer une fonction avec arg "Bonsoir"</button>

                {/* lancer le console.log("Bonne nuit") après le click sans invoquer de fonction */}
                    <button onClick={() => console.log('Bonne nuit')}>Clg sur le bouton</button>
            </div>
        )
}
export default Welcome
