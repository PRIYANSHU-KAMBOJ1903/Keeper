import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import App from "./components/App"
import './Styles/style.css'

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App />)