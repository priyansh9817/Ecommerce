
import { createRoot } from 'react-dom/client'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // This adds Bootstrap JS functionalities

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// configure the authcontext 
import { AuthProvider } from './context/auth.jsx';
import { SearchProvider } from './context/search.jsx';
import "antd/dist/reset.css";
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SearchProvider>
  </AuthProvider>
)
