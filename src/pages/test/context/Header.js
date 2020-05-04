import React from "react";
import Context from "./context";

const Header = () => {
  return (
    <div className="header">
      <Context.Consumer>
        {({ state, dispatch }) => (
          <div>
            <div>count:{state.count}</div>
            <button onClick={() => dispatch({ type: "increment" })}>
              increase
            </button>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
};
export default Header;
