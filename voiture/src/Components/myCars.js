import React, {Component} from 'react';
import Cars from './Cars';


class Mycars extends Component{
    render(){
        console.log(this);
        return( 
            <div>    
                <h1>{this.props.title}</h1>

                <Cars color="red">FORD</Cars>
                <Cars color="black">MERCEDES</Cars>
                <Cars color="green">PEUGEOT</Cars>
                <Cars>FERRARI</Cars>
                <Cars></Cars>
                <Cars color='grey'>MASERATI</Cars>

            </div>  
        )
    }
}

export default Mycars
