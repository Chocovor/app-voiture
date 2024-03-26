import React, {Component} from 'react';
import Cars from './Cars';
import Wrapper from  "../components/Wrapper";
import MyHeader from  "../components/MyHeader"


class Mycars extends Component{
    state={
        cars: ["Ford", "Mercedes", "BMW", "Audi", "Maserati", "Ferrari"],
        prix: ["<100k", "<100k"]
    }

    render(){
        console.log(this);
        return( 
            <div>
                <Wrapper>
                    <MyHeader 
                        myStyle={this.props.color}
                    >
                        {this.props.title}
                    </MyHeader>     
                </Wrapper> 
                
                <Cars color="red" price={this.state.prix[0]}>{this.state.cars[0]}</Cars>
                <Cars color="black" price={this.state.prix[0]}>{this.state.cars[1]}</Cars>
                <Cars color="green" price={this.state.prix[0]}>{this.state.cars[2]}</Cars>
                <Cars price={this.state.prix[1]}>{this.state.cars[4]}</Cars>
                <Cars></Cars>
                <Cars color='grey' price={this.state.prix[0]}>{this.state.cars[3]}</Cars>
                <Cars color="white"price={this.state.prix[1]}>{this.state.cars[5]}</Cars>

                <Wrapper>
                    <MyHeader 
                            myStyle={this.props.color}
                    >
                            Nos Meilleures Ventes
                    </MyHeader>
                </Wrapper>  

            </div>  
        )
    }
}

export default Mycars
