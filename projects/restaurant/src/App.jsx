import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import RestView from "./pages/RestView";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant_view" element={<RestView />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
