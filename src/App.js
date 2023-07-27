import React from "react";
import Header from "./components/Header";
import "./index.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
