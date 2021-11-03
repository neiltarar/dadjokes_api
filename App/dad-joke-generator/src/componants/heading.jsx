import React, { Component } from "react";
const axios = require('axios').default;

class Demo2 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    getJokes() {
        // axios.get(`https://v2.jokeapi.dev/joke/${this.state.selectedOption}?blacklistFlags=nsfw&format=txt`)
        //     .then((response) => {
        //         let result = (response.data)
        //         console.log(result)
        //     });
    };

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    };

    formSubmit(event) {
        event.preventDefault();
        axios.get(`https://v2.jokeapi.dev/joke/${this.state.selectedOption}?blacklistFlags=nsfw&format=txt`)
            .then((response) => {
                const joke = (response.data)
                console.log(joke)
                this.setState({ joke });
            });
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
                    Selected option is : {this.state.joke}
                </div>
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Demo2;