import "./App.css";
import React, { Component } from "react";
import Covid from "./compornents/covid";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "test",
      data: {},
    };
  }
  componentDidMount() {
    console.log("DidMount");
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(
      function (response) {
        console.log(response.data);
        self.setState({ data: response.data });
      },
      function (error) {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className=".App-header">
          <Covid data={this.state.data} />
        </header>
      </div>
    );
  }
}
