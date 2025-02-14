import React,{useState} from 'react'

function Colors() {
    const [colors,setColors]=useState({
        first:'Red',
        second:'Blue',
        third:'Orange',
        fourth:'Green'
    })
  return (
    <>
    <h2 style={{color:'blue'}}>Colors</h2>
    <ul>
        <li>{colors.first}</li>
        <li>{colors.second}</li>
        <li>{colors.third}</li>
        <li>{colors.fourth}</li>
    </ul>
    <button onClick={()=>setColors({...colors,first:'Yellow'})}>Change First Color</button>
    <button onClick={()=>setColors({...colors,second:"Black"})}>Change Second color</button>
    </>
  )
}

export default Colors