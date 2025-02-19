import React, { useState } from 'react'

function Register() {
    const [userData, setUserData] = useState(
        {
            uname: '',
            ugender: '',
            ucourse: ''
        }
    )
    const RegisterUser = (e) => {
        e.preventDefault()
        console.log('Final Data:', userData)
    }
    const getUserData = (e) => {
        let fieldName = e.target.name
        let userValue = e.target.value
        setUserData({ ...userData, [fieldName]: userValue })
    }
    return (
        <>
            <h2 style={{ color: 'blue' }}>Registration Form</h2>
            <form onSubmit={RegisterUser}>
                <label htmlFor="" style={{ fontSize: '20px' }}>First Name:</label>
                <input type="text" onChange={(e) => getUserData(e)} style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} placeholder='Enter your First Name' name='uname' />
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="" style={{ fontSize: '20px' }}>Gender:</label>
                    <input type="radio" name='ugender' value="Male" onChange={(e) => getUserData(e)} style={{ marginLeft: '42px' }} />
                    <label htmlFor="">Male</label>
                    <input type="radio" name='ugender' value="Female" onChange={(e) => getUserData(e)} />
                    <label htmlFor="">Female</label>
                    <input type="radio" name='ugender' value="Other" onChange={(e) => getUserData(e)} />
                    <label htmlFor="">Other</label>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="" style={{ fontSize: '20px' }}>Course:</label>
                    <select id="" name='ucourse' onChange={(e) => getUserData(e)} style={{ marginLeft: '44px', width: '273px', padding: '10px', borderRadius: '5px' }}>
                        <option selected>- Select an option -</option>
                        <option value="CE">CE</option>
                        <option value="ME">ME</option>
                        <option value="EEE">EEE</option>
                    </select>
                    <div>
                        <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '299px', color: 'white', marginTop: '20px' }} value={'Register'} />
                    </div>

                </div>


            </form>
        </>
    )
}

export default Register