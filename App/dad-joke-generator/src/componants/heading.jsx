import React, { Component } from "react";
import mainImage from '../images/dadJokes_background.jpg';
import Axios from 'axios';

class main extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    };

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    };

    onClick = () => {
        this.setState({ loading: true }, () => {
            Axios.get(`https://v2.jokeapi.dev/joke/${this.state.selectedOption}?blacklistFlags=nsfw&format=txt`)
                .then((response) => {
                    const joke = (response.data);
                    console.log(joke);
                    this.setState({ joke });
                });
        });
    };

    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption) {
            this.onClick();
        } else {
            alert("Choose a joke type!");
        };
    };

    render() {
        return (
            <React.Fragment>
                <div class="d-sm-inline-flex flex-column bd-highlight mb-3">
                    <h1>Dad Joke Generator</h1>
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
                        <button class="btn btn-success" type="submit">
                            I Feel (un)Lucky
                        </button>
                    </form>
                    <img src={mainImage} alt="" />
                    <div>
                        {this.state.joke}
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default main;