import React, { useReducer, useState, useRef, useEffect } from "react";
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
  //新版context数据变化是动态响应的
  const [state, dispatch] = useReducer(countReducer, initState);
  const [value, setValue] = useState(0);
  const buttonRef = useRef(null);
  console.log("App render");
  useEffect(() => {
    // useEffect首次触发发生在render之后
    console.log("useEffect");
    //测试react合成事件，通过事件流冒泡，将事件都绑定在document上，原生事件阻止冒泡之后，不会触发合成事件
    buttonRef.current.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("button native click", e);
    });
  }, []);
  const [xssData, setXSSData] = useState(null);
  console.log(<div>reactElememt</div>)
  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Content />
        <div>state:{value}</div>
        <div>
          <button
            onClick={() => {
              // react会批量更新，只会重新render一次
              setValue((v) => v + 1);
              setValue((v) => v + 1);
              setValue((v) => v + 1);
            }}
          >
            setValue
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              // 异步事件中不会批量更新
              setTimeout(() => {
                setValue((v) => v + 1);
                setValue((v) => v + 1);
                setValue((v) => v + 1);
              });
            }}
          >
            async setValue
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setXSSData({
                ref: null,
                type: "div",
                $$typeof: Symbol.for("react.element"),
                props: {
                  dangerouslySetInnerHTML: {
                    __html: `xss dangerouslySetInnerHTML<img hidden src="err" onError="alert('XSS 攻击')"/>`,
                  },
                  style: { fontWeight: "bold" },
                },
              });
            }}
          >
            开始XSS攻击
          </button>
          {xssData}
        </div>
        <div>
          <button
            ref={buttonRef}
            onClick={() => {
              console.log("react click");
            }}
          >
            native click
          </button>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
