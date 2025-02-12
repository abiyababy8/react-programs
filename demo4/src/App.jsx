import Home from "./Home"
import UserDetails from "./UserDetails"

function App() {
  const myStyle = {
    height: "300px",
    width: "100%",
    backgroundColor: "black"
  }
  return (
    <>
      <Home />
      <UserDetails/>
      <h2 style={{ color: "red" }}>HOME PAGE</h2>
      <h4 style={{ color: "green" }}>React</h4>
      <h4 style={{ color: "orange", fontSize: "30px", backgroundColor: "grey" }}>Angular</h4>
      <div style={myStyle}></div>
    </>
  )
}
export default App
