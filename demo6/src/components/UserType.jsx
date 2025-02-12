import React, { Component } from 'react'

export default class UserType extends Component {
    render() {
        return (
            <>
                <h3>USER TYPE</h3>
                {
                    this.props.age >= 18 ?
                        <p>User is major</p> :
                        <p>User is minor</p>
                }
            </>
        )
    }
}