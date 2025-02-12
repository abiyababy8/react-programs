import Home from "./Home"
function App() {
  // function defined as arrow function
  const show = () => {
    alert("User clicked")
  }
  //function defined as normal function
  function loginUser() {
    alert("User logged")
  }

  const print = (data) => {
    alert(`${data}`)
  }
  //or
  // function print(name){
  //   alert(name)
  // }

  const getName = (e) => {
    let uname = e.target.value;
    console.log(uname)
  }
  const getEmail = (a) => {
    let uemail = a.target.value;
    console.log(uemail)
  }
  return (
    <>
      <h3>REACT EVENTS</h3>
      <button style={{ color: 'white', backgroundColor: 'black', padding: '20px', margin: '20px', borderRadius: '5px' }} onClick={show}>SUBMIT</button>
      <button style={{ color: 'white', backgroundColor: 'black', padding: '20px', margin: '20px', borderRadius: '5px' }} onClick={loginUser}>LOG IN</button>
      {/* call function with argument */}
      <br />
      <button style={{ color: 'white', backgroundColor: 'black', padding: '20px', margin: '20px', borderRadius: '5px' }} onClick={() => print('Jennifer')}>Print Name</button>
      <br /> <br />
      <input type="text" placeholder="Enter username" style={{ padding: "20px", margin: "20px", width: "300px", borderRadius: "10px" }} onChange={(e) => getName(e)} />
      <br /> <br />
      <input type="email" placeholder="Enter email" style={{ padding: '20px', margin: '20px', width: '300px', borderRadius: '10px' }} onChange={(a) => getEmail(a)} />
      <Home />
    </>
  )
}

export default App
