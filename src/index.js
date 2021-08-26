import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { todoApp } from "./redux";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import api from "./services";

export const store = createStore(
  todoApp,
  applyMiddleware(thunk.withExtraArgument(api))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
