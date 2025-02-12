import React, { Component } from 'react'
import '../address.css'

export default class Address extends Component {
    render() {

        return (
            <>
                {
                    this.props.isShow && <div>
                        <h3>ADDRESS</h3>
                        <ul>
                            <li>Name: Minnu</li>
                            <li>Location: Kakkanad</li>
                            <li>Pin: 686868</li>
                        </ul>
                    </div>
                }
            </>
        )
    }
}
