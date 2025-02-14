import React,{useState} from 'react'

function Example() {
    const [name,updateName]=useState('sean')

  return (
    <>
    <h3>useState() hook</h3>
    <h4 style={{color:'red',fontWeight:800}}>Name: {name}</h4>
    <button onClick={()=>updateName('Todd')}>Change Name</button>
    </>
  )
}

export default Example