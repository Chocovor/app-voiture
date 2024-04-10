import React, {Component}from 'react'
import './myCss.css'


class PostalCard extends Component {
  state = {
    comment: '',
    link: '',
  }

  handleComments = event => {
    this.setState({
        comment: event.target.value
    })
  }
  handleLinks = event => {
    this.setState({
        link: event.target.value
    })
  }
  handleSend = event => {
    this.setState({
        address: event.target.value
    })
  }
  affiche = (param) =>  {
    this.setState({ 
        ordre : alert(param),
  })
  }
  
  render() {
    return (
      <div className='cartePostale'>
         <h2>Envoyer une carte postale numérique</h2>
        <div  className="rendu">
          <img src={this.state.link} alt="image de la carte postale" width="50%"></img>
          <h3>aperçu de votre message</h3>
          <input type="text" value={this.state.comment}></input>
        </div>

        <div className="formul">
       

        <label>Entrez l'URL de votre image ici</label>
        <textarea value={this.state.link} onChange={this.handleLinks}></textarea>

        <label>Ecrivez votre message ici</label>
        <textarea value={this.state.comment} onChange={this.handleComments}></textarea>

        <label>Destinataire</label>
        <textarea value={this.state.Address} onChange={this.handleSend}></textarea>

        <button class="btn btn-outline-info" onClick={() => this.affiche("Courrier envoyé")}>Validez</button>
        </div>
      </div>
    )
  }
}

export default PostalCard;