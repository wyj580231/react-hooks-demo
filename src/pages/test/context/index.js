import React, { useReducer } from "react";
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
export default () => {
  //新版context数据变化是动态响应的
  const [state, dispatch] = useReducer(countReducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Header />
      <Content />
    </Context.Provider>
  );
};
