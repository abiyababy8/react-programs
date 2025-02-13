import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState((prevCount) => ({
            count: prevCount.count + 1
        }))
    }
    render() {
        return (
            <>
                <h3>COUNTER</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
            </>
        )
    }
}
