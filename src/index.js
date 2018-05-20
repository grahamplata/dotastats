import React from "react";
import ReactDOM from "react-dom";
import "./css/dota2minimapheroes.css";
import "./css/index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
