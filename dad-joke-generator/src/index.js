import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Buttons from "./components/buttons";

ReactDOM.render(<Header />, document.getElementById("heading"));
ReactDOM.render(<Buttons />, document.getElementById("main"));

reportWebVitals();
