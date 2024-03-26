import React, {Component} from 'react';
import Cars from './Components/Cars.js'


class Mycars extends Component{
    render(){
        return( 
            <div>    
                <h1>Hello React</h1>
                <Cars />
                <Cars />
                <Cars />
            </div>  
        )
    }
}

export default Mycars
