import React, { Component } from "react";

export default class hello extends Component {
  render() {
    return (
      <>
        <div>hello name{this.props.name}</div>
      </>
    );
  }
}
