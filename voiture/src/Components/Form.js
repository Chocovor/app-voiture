import React, {Component} from "react"
import Car from "./Car"
import './myCss.css'
import MyHead from './MyHeaderOne'
import styles from './myCss.module.css'
import styled from 'styled-components'

class Form extends Component {

    state ={
        username: "",
        colors: ["Red","Blue","Green",'black','pink'],
        comment: ""
    }

    /*handlePseudo = e => {
        this.setState({username : e.target.value})
    }*/
    handleColor = event => {
        this.setState({username : event.target.value})
    }
    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handleSubmitForm = e => {
        e.preventDefault(); 
        console.log(`Username: ${this.state.username} couleur : ${this.state.colors}`)
    }
    
    render(){
        const Title = styled.h1`
        color: red;
        font-size: 80px;
        `
        const Button = styled.button`
            background: black;
            border: 2px solid red;
            border-radius: 5px;
            padding: 5px;
            color: #BF4F74;
            cursor: pointer;
        `
        return(
            <div>
                    {/* <h1 className={styles.green}>Commentaire 1</h1> */}
                <Title>Commentaire</Title>
                <Button> bouton librairie Styled components</Button>
                {/* <h2 className='blue'>La patiente c'est le bon comportement que l'on a pendant que l'on attend</h2> */}
                <form onSubmint={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo </label>
                        <input type="text" value={this.state.username}/><br />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                            {/*<option value="vert">vert</option>
                            <option value="rouge">rouge</option>
                        <option value="orange">orange</option>*/}
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                        <button  class="btn btn-outline-info" onChange={this.handleSubmit}>soumettre</button>
                    </div>
                </form>
                <Car color = "blue" height='180'/>
            </div>
        )
    }
}
export default Form