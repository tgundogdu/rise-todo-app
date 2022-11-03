import React from "react";
import "./assets/styles/index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>rise-todo-app</h1>
        <h5>react, redux, scss, hooks, webpack, axios</h5>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
