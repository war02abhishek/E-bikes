import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(

  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//we can wrap roter dom (<route>) here also bt be careful it must be placed betn App-provider and App and because we also want to acess components of App provider
