import { useState } from "react"

function App() {
  const [uname,setUname]=useState('')
  const loginUser = (e) => {
    e.preventDefault()   //to prevent default reloading of the page
    console.log('Inside loginUser function..')
    console.log(uname)
  }
  return (
    <>
      <h2>REACT FORMS</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} onChange={(e)=>setUname(e.target.value)}/>
        <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', color: 'white' }} value={'Login'} />
      </form>
    </>
  )
}

export default App
