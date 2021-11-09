import React, { Component } from "react";
import axios from "axios";

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      name: "Programming",
      joke: "",
    };

    this.onValChange = this.onValChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onValChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const joke = document.getElementById("joke");
    joke.innerText = "...loading";
    axios
      .get(
        `https://v2.jokeapi.dev/joke/${this.state.name}?blacklistFlags=nsfw&format=txt`
      )
      .then((response) => {
        let result = response.data;
        console.log(result);
        const joke = document.getElementById("joke");

        joke.innerText = result;
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <form onSubmit={this.onSubmitForm}>
            <label>
              <input
                type="radio"
                value="Programming"
                checked={this.state.name === "Programming"}
                onChange={this.onValChange}
              />
              <span>Programming</span>
            </label>

            <label>
              <input
                type="radio"
                value="Pun"
                checked={this.state.name === "Pun"}
                onChange={this.onValChange}
              />
              <span>Pun</span>
            </label>

            <label>
              <input
                type="radio"
                value="Spooky"
                checked={this.state.name === "Spooky"}
                onChange={this.onValChange}
              />
              <span>Spooky</span>
            </label>

            <label>
              <input
                type="radio"
                value="Miscellaneous"
                checked={this.state.name === "Miscellaneous"}
                onChange={this.onValChange}
              />
              <span>Miscellaneous</span>
            </label>
            <div>
              <button type="submit" className="search-btn">
                I Feel (un)Lucky!
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="d-grid col-6 mx-auto" id="joke"></p>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
