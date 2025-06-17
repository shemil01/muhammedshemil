import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from 'react-ga4';

import App from "./App.jsx";
ReactGA.initialize('G-L95JWV5KYY')
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
      <App />
   
  </React.StrictMode>
);
