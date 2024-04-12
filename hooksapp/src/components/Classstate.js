import React, { Component, useState } from 'react';

// constructor(props){
//      super(props); 
//     this.state ={counter:0}
// this.handleClick = this.handleClick.bind(this);
// }

const addOne = () => {
    this.setState.counter ({
        counter: this.state.counter + 1
    })
}
// const addOne = () => {
//     this.setState(prevState => {
//         return{
//         counter: prevState.counter + 1
//     }
//     })
// }

class ClassState extends Component{
    state={
        counter : 0
    }

    render() {
        return (
            <div>
                <p>Class State: {this.state.counter}</p>
                <button onClick={this.addOne}>State dans Class</button>
            </div>
        )
    }
}

export default ClassState