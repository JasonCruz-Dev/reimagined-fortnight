import React from "react";
import "./App.css";
import Main from "./components/Main";
import SpacexCard from "./components/SpacexCard";
import SpaceX from "../src/images/SpaceX.svg";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import front_img from "./images/front_img.jpg";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <img className='logo' src={SpaceX} alt='Space X logo' />
        </header>
        <div className='welcome_para'>
          <h3>Welcome to my fan page! </h3>
          <p>
            I'm currently am attending Lambda School for the Full-Stack Engineer course, this is one
            of my projects I recently aced. I will add more content as I go, stay tuned!
          </p>
        </div>
        <div className='frontimg_border'>
          <img className='frontimg' src={front_img} alt='Starship' />
        </div>
        <p className='welcome_para'>
          This will load Space X's list of Rockets they have on a public list. Though they many to
          on a list to choose from, we choose this one. This was a Lambda School Project working
          with React.Js, Redux and Middleware. Everything under the hood can be seen by "pressing
          F12".
        </p>
        <Main />
        <SpacexCard />
      </div>
    </Provider>
  );
}

export default App;
