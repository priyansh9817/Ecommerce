import { Routes, Route } from "react-router-dom"
import HomePages from "./pages/HomePages"
import About from "./pages/About"
import Register from "./pages/Auth/Register"
import Contact from "./pages/contact"
import Policy from "./pages/policy"
import Pagenotfound from "./pages/pagenotfound"
// for notifications using npm toastify 
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Auth/Login"
import Dashboard from "./pages/User/UserDashboard"
import PrivateRoute from "./Components/Routes/Private"
import Forgotpassword from "./pages/Auth/Forgotpassword"
import AdminRoute from "./Components/Routes/AdminRout"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import CreateCategory from "./pages/Admin/CreateCategory"// for admin
import CreateProduct from "./pages/Admin/CreateProduct"
import User from "./pages/Admin/User"
import Orders from "./pages/User/Orders" // for user
import Profile from "./pages/User/Profile"



function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        {/* Private routes ke liye yaha use kar rahe hai kon saa route private rakha h kon saa nhi Auth ke basic pe acces ho  */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        {/* Private routes for Admin  */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<User />} />
          

        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </>
  )
}

export default App


/// Note : Routes container ki traha use hota hai jahan multiple Route use hota hai 