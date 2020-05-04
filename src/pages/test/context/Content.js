import React from "react";
import Context from "./context";

const Content = () => {
  return (
    <div className="content">
      <Context.Consumer>
        {({ state, dispatch }) => (
          <div>
            <div>count:{state.count}</div>
            <button onClick={() => dispatch({ type: "decrement" })}>
              decrease
            </button>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
};
export default Content;
