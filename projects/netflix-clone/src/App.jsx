import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Row from "./components/Row"

function App() {
  return (
    <>
      netflix clone
      <Nav />
      <Banner />
      <Row title={'Trending'}/>
      <Row title={'Netflix Originals'}/>
      <Row title={'Top Rated'}/>
      <Row title={'Action Movies'}/>
      <Row title={'Comedy Movies'}/>
      <Row title={'Horror Movie'}/>
      <Row title={'Romance Movies'}/>
      <Row title={'Documentaries'}/>
     
    </>
  )
}

export default App
