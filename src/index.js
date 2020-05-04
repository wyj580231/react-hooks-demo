import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import DefaultApp from './App';
///////////// hooks模拟注释
// const stateCache = [];
// let stateCursor = 0;
// const effectCache = [];
// let effectCursor = 0;
// const effectCleanFnCache = [];

// function useState(initialState) {
//   const currentCursor = stateCursor;
//   stateCache[currentCursor] = stateCache[currentCursor] || initialState; //是否初次渲染
//   function setState(value) {
//     stateCache[currentCursor] =
//       typeof value === "function" ? value(stateCache[currentCursor]) : value;
//     render(); //模拟框架内部render触发
//   }
//   stateCursor++;
//   return [stateCache[currentCursor], setState];
// }

// function useEffect(callback, deps) {
//   if (!Array.isArray(deps)) {
//     typeof effectCleanFnCache[effectCursor] === "function" &&
//       effectCleanFnCache[effectCursor]();
//     effectCleanFnCache[effectCursor] = callback();
//     effectCursor++;
//     return;
//   }
//   const currentCursor = effectCursor;
//   const depsBefore = effectCache[currentCursor];
//   if (!depsBefore) {
//     //初次渲染一定执行
//     effectCache[currentCursor] = deps;
//     effectCleanFnCache[effectCursor] = callback();
//   } else {
//     if (deps.some((v, i) => v !== depsBefore[i])) {
//       typeof effectCleanFnCache[effectCursor] === "function" &&
//         effectCleanFnCache[effectCursor]();
//       effectCleanFnCache[effectCursor] = callback();
//     }
//   }
//   effectCursor++;
// }

// function App() {
//   const [num1, setNum1] = useState(0);
// //   if (num1 === 0) {
// //     const [testNum] = useState("");
// //   }
//   const [num2, setNum2] = useState(0);

//   useEffect(() => {
//     console.log("useEffect 执行,依赖[]");
//   }, []);
//   useEffect(() => {
//     console.log("useEffect 执行,依赖空");
//   });
//   useEffect(() => {
//     console.log("useEffect 执行,依赖num1");
//     return () => console.log("依赖num1清理函数执行");
//   }, [num1]);
//   return (
//     <div>
//       <DefaultApp/>
//       <div>num1:{num1}</div>
//       <div>num2:{num2}</div>
//       <button onClick={() => setNum1(num1 + 1)}>add num1</button>
//       <button onClick={() => setNum2(num2 => num2 + 1)}>add num2</button>
//     </div>
//   );
// }

// /**
//  * 模拟react render
//  */
// function render() {
//   ReactDOM.render(<DefaultApp />, document.getElementById("root"));
//   stateCursor = 0;
//   effectCursor = 0;
// }

// render();
ReactDOM.render(<DefaultApp />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
