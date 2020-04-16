import React, { useReducer } from "react";
import "./App.css";
import Context from "./context";
import Header from "./Header";
import Content from "./Content";

const initState = {
  count: 0,
};
function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, initState);
  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Content />
      </Context.Provider>
    </div>
  );
}

export default App;
