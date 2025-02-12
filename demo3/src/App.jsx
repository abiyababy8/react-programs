import Home from "./Home"
import Random from "./Random"

function App() {
  const name = "Abiya";
  const location = "Kakkanad"
  return (
    <>
      <h3>Class Component</h3>
      <Random userMessage={"Message from App"} />
      <Home firstName={name} place={location} />
    </>
  )
}
export default App
