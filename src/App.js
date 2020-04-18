import React from "react";
import "./App.css";
import Main from "./components/Main";
import SpacexCard from "./components/SpacexCard";
import SpaceX from "../src/images/SpaceX.svg";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
// import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <img className='logo' src={SpaceX} alt='Space X logo' />
        </header>
        <Main />
        <SpacexCard />
      </div>
    </Provider>
  );
}

export default App;
