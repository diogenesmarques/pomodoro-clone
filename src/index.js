import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Timer from "./Timer.jsx";

const App = () => {
  return(
    <div>
      <Header/>
      <Timer/>
    </div>
  )
}

ReactDOM.render(<App/>, window.document.getElementById("root"));