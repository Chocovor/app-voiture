import React, { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name:''
        }
    }
    componentDidMount(){
        document.title = `Vous avez cliqué ${this.state.count} fois`;
        console.log('didmount')
    }
    componentDidUpdate(prevProps, prevState){
        document.title = `Vous avez cliqué ${this.state.count} fois`;
        if(this.state.count !== prevState.count){
            console.log('mise à jour du titre')
            document.title = `Vous avez cliqué ${this.state.count} fois`;
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={ () => this.setState({count : this.state.count +  1})}>Cliquez pour incrémenter</button>
        <input type="text" value={this.state.name} onChange={e=>{
            this.setState({
                name: e.target.value
            })
        }}></input>
      </div>
    )
  }
}

export default ClassCount
