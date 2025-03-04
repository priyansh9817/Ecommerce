import {Routes, Route} from "react-router-dom"
import HomePages from "./pages/HomePages"
import About from "./pages/About"
import Register from "./pages/Auth/Register"
import Contact from "./pages/contact"
import Policy from "./pages/policy"
import Pagenotfound from "./pages/pagenotfound"
// for notifications using npm toastify 
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Auth/Login"



function App() {
  return (
   
    <>
      <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/policy" element={<Policy/>}></Route>
      <Route path="*" element={<Pagenotfound/>}></Route>
    </Routes>
    </>
  )
}

export default App


/// Note : Routes container ki traha use hota hai jahan multiple Route use hota hai 