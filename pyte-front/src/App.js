import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

import HomeScreen from "./screens/HomeScreen.js";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="d-flex" id="app-wrapper">
        <HomeScreen />
      </div>
    </Provider>
  );
}

export default App;
