import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UseContext from "./components/use-context/use-context";
import userContext from "./contexts/user-context";
import UseEffect from "./components/use-effect/use-effect";
import UseReducer from "./components/use-reducer/use-reducer";
import UseState from "./components/use-state/use-state";

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
}

const users: IUserItem[] = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Bret@gmail.com",
    username: "Bret",
  },
  {
    id: 2,
    name: "Victor Plains",
    email: "Antonette@gmail.com",
    username: "Antonette",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Samantha@gmail.com",
    username: "Samantha",
  },
];

const providerState = {
  users,
};

ReactDOM.render(
  <React.StrictMode>
    <UseState />
    <UseEffect/>
    <UseReducer/>
    <userContext.Provider value={providerState}>
      <UseContext />
    </userContext.Provider>
    ;
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
