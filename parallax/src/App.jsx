import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Index from "./components/Index"
import Nav from "./components/Nav"
import About from "./components/About"
function App() {


  return (
    <>
     <Nav />
    <Routes>
      <Route path="/home" element={<Index />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    
    <Footer />
    </>
  )
}

export default App
