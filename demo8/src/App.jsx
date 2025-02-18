import { useState } from "react"
import Register from "./components/Register"
import SimpleForm from "./components/SimpleForm"
import FormObject from "./components/FormObject"

function App() {
  const [uname, setUname] = useState('')
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
        <input type="text" placeholder="Enter your username" style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} onChange={(e) => setUname(e.target.value)} />
        <input type="submit" value={'Login'} style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', color: 'white' }} />
      </form>
      <SimpleForm/>
      <FormObject/>
      <Register />
    </>
  )
}

export default App
