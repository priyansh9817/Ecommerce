
import { createRoot } from 'react-dom/client'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // This adds Bootstrap JS functionalities

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// configure the authcontext 
import { AuthProvider } from './context/auth.jsx';
import { SearchProvider } from './context/search.jsx';
import { CartProvider } from './context/cart.jsx';
import "antd/dist/reset.css";

import axios from "axios"; // ✅ Add this if not already imported

// ✅ SET TOKEN TO AXIOS DEFAULT HEADERS IF PRESENT
const authData = JSON.parse(localStorage.getItem("auth"));
if (authData?.token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authData.token}`;
}
<script src="https://js.braintreegateway.com/web/dropin/1.33.7/js/dropin.min.js"></script>
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
)
