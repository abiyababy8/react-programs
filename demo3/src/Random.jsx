import React, { Component } from 'react'
class Random extends Component {
    render() {
        console.log("Data from Parent Component:");
        console.log(this.props)
        console.log(this.props.userMessage)
        return (
            <>
                <div>Random</div>
                {/* render dynamic data from parent component */}
                <h3>{this.props.userMessage}</h3>
            </>
        )
    }
}
export default Random;