import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts/font.css";

import App from "./App";
import GlobalStyle from "./styles/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
