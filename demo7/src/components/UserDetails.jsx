import React,{useState} from 'react'

function UserDetails() {
    const userArray=[
        {
            firstName:'jim',age:23
        },
        {
            firstName:'dwight',age:24
        },
        {
            firstName:'joey',age:23
        },
        {
            firstName:'ross',age:24
        },
        {
            firstName:'chandler',age:24
        }
    ]
  return (
    <>
    <h3 style={{color:'blue'}}>USER DETAILS</h3>
    <table>
        <thead>
            <tr>
                <th>SL NO</th>
                <th>NAME</th>
                <th>AGE</th>
            </tr>
        </thead>
        <tbody>
           {
            userArray.map((item,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                    </tr>
                )
            })
           } 
        </tbody>
    </table>
    </>
  )
}

export default UserDetails