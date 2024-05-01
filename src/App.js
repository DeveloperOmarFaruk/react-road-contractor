import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import DisplayContractors from "./components/DisplayContractors/DisplayContractors";

function App() {
  return (
    <>
      <div className="component-container">
        <Header />
        <DisplayContractors />
      </div>
    </>
  );
}
export default App;
