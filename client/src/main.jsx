
import { createRoot } from 'react-dom/client'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // This adds Bootstrap JS functionalities

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// configure the authcontext 
import { AuthProvider } from './Context/auth.jsx';
import "antd/dist/reset.css";
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
