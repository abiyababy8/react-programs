import React, { useState } from 'react'

function FormObject() {
    const [userData, setUserData] = useState({
        uFirstName: '',
        uEmail: '',
        uMobNo: ''
    })
    const userRegister = (e) => {
        e.preventDefault();
        console.log(userData)
    }
    return (
        <>
            <h2 style={{ color: "blueviolet" }}>Form With State As Object</h2>
            <form onSubmit={userRegister}>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, uFirstName: e.target.value })} style={{ padding: '10px', marginLeft: '41px', width: '250px', borderRadius: '5px' }} placeholder='Enter your First Name' />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, uEmail: e.target.value })} style={{ padding: '10px', marginLeft: '75px', width: '250px', borderRadius: '5px' }} placeholder='Enter your Email' />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">Mobile Number:</label>
                    <input type="text" onChange={(e) => setUserData({ ...userData, uMobNo: e.target.value })} style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} placeholder='Enter your Mobile Number' />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type='submit' style={{ padding: '20px', marginLeft: '304px', color: 'white', backgroundColor: 'blueviolet', borderRadius: '5px' }}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default FormObject