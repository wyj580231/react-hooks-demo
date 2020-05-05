import React from "react";
import Nav from "./Nav";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Nav />
      <div id="content">{children}</div>
    </div>
  );
};
export default Layout;
