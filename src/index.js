import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./styles/dota2minimapheroes.css";
import GlobalStyle from "./styles/global";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <App />
    </>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
