import React, {Component} from "react"
import '../index.css';

const message= "photo d'un chien berger-malinois"

const Car = (props) => {
    return (
    <div >
        <img src={require('../img/e.jpg')}/>
        <img src="https://img.20mn.fr/o9Jjsp84Q5mip-tYhNLD7yk/1444x920_berger-malinois-illustration" alt={message} width="200px"/>
        <svg style={{backgroundColor:props.color}}
            className="carBorder"height={props.height}
            viewBox="0 0 300 100"
            xmlns=""
            stroke="grey"
            fill="black"
        >
            <circle cx="50" cy="50" r="25" />
            <circle cx="150" cy="50" r="4" />

            <svg viewBox="0 0 10 10" x="200" width="100">
                <circle cx="5" cy="5" r="4" />
            </svg>
            <g>
                <title>Layer 1</title>
                <path fill={props.color} fillRule="nonzero" strokeWidth="12.257193"/>
            </g>
        </svg>
    </div>
    )
}
export default Car; 