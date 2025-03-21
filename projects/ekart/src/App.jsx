import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import WishList from "./pages/WishList"
function App() {
  return (
    <>
     <Header/>
     <h3>Ekart</h3>
     <Home/>
     <Cart/>
     <WishList/>
     <Footer/>
    </>
  )
}
export default App
