import React, {Component} from "react"
import Car from "./Car"

class Form extends Component {

    state ={
        username: "test",
        color:"",
        colors: ["Red","Blue","Green",'black','pink'], 
    }

    handlePseudo = e => {
        this.setState({username : e.target.value})
    }

    render(){
        return(
            <div style={{color: 'red'}}>
                <Car color = "blue" height='250'/>
                <h1>Commentaire</h1>
                <form>
                    <div>
                        <label>Pseudo </label>
                        <input type="text" value={this.state.username}/><br />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select>
                            <option value="vert">vert</option>
                            <option value="rouge">rouge</option>
                            <option value="orange">orange</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form