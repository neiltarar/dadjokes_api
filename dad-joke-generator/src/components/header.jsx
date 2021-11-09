import React, { Component } from "react";
import DadJokeMeme from "../images/dadJokes_background.jpg";
class header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-grid col-3 mx-auto">
          <h1>Dad Joke Generator</h1>
          <div>
            <img className="d-grid col-12 mx-auto" src={DadJokeMeme} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default header;
