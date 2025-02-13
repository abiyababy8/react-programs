import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {
        return (
            <>

                <div>
                    <h3>CONTACT DETAILS</h3>
                    {
                        this.props.firstName === 'Minnu' ?
                            <div>
                                <p>Mobile Number: 9012435678</p>
                                <p>Email: minnu@gmail.com</p>
                            </div> :
                            <p>User don't want to share contact details.</p>
                    }

                </div>

            </>
        )
    }
}
