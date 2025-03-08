import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Index from "./components/Index"
import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
