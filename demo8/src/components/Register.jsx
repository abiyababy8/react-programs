import React, { useState } from 'react'

function Register() {
    const [userData, setUserData] = useState(
        {
            uname: '', ugender: '', ucourse: ''
        }
    )
    const RegisterUser = (e) => {
        e.preventDefault()
        console.log('Inside RegisterUser function')

        console.log(userData)
    }
    const getUserData = (e) => {
        // object destructuring
        // const {key}=object_name

        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    return (
        <>
            <h2>Registration Form</h2>
            <form onSubmit={RegisterUser}>
                <label htmlFor="" style={{ fontSize: '20px' }}>First Name</label>
                <input type="text" style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} placeholder='Enter your First Name' name='uname' onChange={(e) => getUserData(e)} />
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="" style={{ fontSize: '20px' }}>Gender</label>
                    <input type="radio" name='gender' style={{ marginLeft: '20px' }} />
                    <label htmlFor="">Male</label>
                    <input type="radio" name='gender' />
                    <label htmlFor="">Female</label>
                    <input type="radio" name='gender' />
                    <label htmlFor="">Other</label>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="" style={{ fontSize: '20px' }}>Course</label>
                    <select  id="" style={{ marginLeft: '20px' }}>
                        <option value="CE">CE</option>
                        <option value="ME">ME</option>
                        <option value="EEE">EEE</option>
                    </select>
                    <div>
                        <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', color: 'white', marginTop: '20px' }} value={'Register'} />
                    </div>

                </div>


            </form>
        </>
    )
}

export default Register