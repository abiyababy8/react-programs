import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Row from "./components/Row"
import requests from "./requests"
function App() {
  return (
    <>
      <Nav />
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title={'Trending'}/>
      <Row title={'Netflix Originals'}/>
      <Row title={'Top Rated'}/>
      <Row title={'Action Movies'}/>
      <Row title={'Comedy Movies'}/>
      <Row title={'Horror Movies'}/>
      <Row title={'Romance Movies'}/>
      <Row title={'Documentaries'}/>
    </>
  )
}
export default App