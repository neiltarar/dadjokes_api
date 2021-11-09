import React, { Component } from "react";

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Programming",
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
    console.log(this.state.name);
  };

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      <div className="d-grid col-3 mx-auto">
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
          <div className="d-grid col-12 mx-auto">
            <button type="submit" className="btn btn-primary">
              I Feel (un)Lucky!
            </button>
          </div>
        </form>
      </div>
      //   </div>
      // </div>
    );
  }
}

export default Buttons;
