import React, { Component } from "react";

class Demo2 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Programming"
                            checked={this.state.selectedOption === "Programming"}
                            onChange={this.onValueChange}
                        />
                        Programming
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Pun"
                            checked={this.state.selectedOption === "Pun"}
                            onChange={this.onValueChange}
                        />
                        Pun
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Spooky"
                            checked={this.state.selectedOption === "Spooky"}
                            onChange={this.onValueChange}
                        />
                        Spooky
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Miscellaneous"
                            checked={this.state.selectedOption === "Miscellaneous"}
                            onChange={this.onValueChange}
                        />
                        Miscellaneous
                    </label>
                </div>
                <div>
                    Selected option is : {this.state.selectedOption}
                </div>
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Demo2;