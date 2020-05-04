import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts";
import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
