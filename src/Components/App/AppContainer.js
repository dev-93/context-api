import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
    state = {
        message: "Hello",
    };
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                message: "BYE",
            });
        }, 2000);
    };
    render() {
        return (
            <Store.Provider value={this.state}>
                <AppPresenter />
            </Store.Provider>
        );
    }
}

export default AppContainer;
