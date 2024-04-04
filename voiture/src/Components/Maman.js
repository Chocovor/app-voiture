import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = (param) =>  {
        this.setState({ 
            ordre : alert(param),
})
}
    ordreMaman0 = (msg) => this.setState({messageMaman : msg, disabled: false});
    reponseToto = (msg) => this.setState({messageToto : msg});

    render() {
        return (
            <div style={{color:"white"}}>
                <h1>Maman</h1>
                <button
                    onClick={() => this.ordreMaman("Va ranger ma chambre")}
                >Order de la mère</button>

                <button 
                    onClick={() => this.ordreMaman0("Va ranger ta chambre")}
                >Order de la mère 0</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseToto={this.reponseToto}
                    leState={this.state}
                />
            </div>
        )
    }
}

export default Maman;