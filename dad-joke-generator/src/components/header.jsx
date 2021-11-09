import React, { Component } from "react";
import DadJokeMeme from "../images/dadJokes_background.jpg";
class header extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Dad Joke Generator</h1>
        </div>
        <div id="background-img">
          <img
            className="main"
            src={DadJokeMeme}
            alt="Dad making a dad-joke and his family is face palming"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default header;
