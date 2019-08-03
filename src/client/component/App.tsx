import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className="component-app">
        Welcome to the wonderous world of <i>Strife</i>
      </div>
    );
  }
}
