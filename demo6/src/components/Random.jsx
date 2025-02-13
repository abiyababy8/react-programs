import React, { Component } from 'react'

export default class Random extends Component {
    constructor() {
        super();
        this.state = {
            carName: 'Polo'
        }
    }
        changeCar(name){
             this.setState({carName:name})
        };
    
    render() {
        return (
            <>
                <h3 style={{color:"green"}}>MY CAR NAME</h3>
                <p>Car: {this.state.carName}</p>
                <button type="button" onClick={()=>this.changeCar("Swift")}>Change Car</button>
            </>
        )
    }
}
