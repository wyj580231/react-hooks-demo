import React, { useState, useEffect, useRef } from "react";

export default () => {
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
  return (
    <div>
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
          ref={buttonRef}
          onClick={() => {
            console.log("react click");
          }}
        >
          native click
        </button>
      </div>
    </div>
  );
};
