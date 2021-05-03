import "./App.css";
import React, { Component } from "react";
import UserInfo from "./components/UserInfo";
import UserRepo from "./components/UserRepo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import NotFound from "./components/NotFound";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            repos: [],
            defaultUser: "torvalds",
            searchParams: {
                sort: "created",
                client_id: "535cfd6d6dc3598c7ada",
                client_secret: "7174cbd7a05cc08023d8356bfdd7b0fea7deca04",
            },
        };
    }

    componentDidMount() {
        this.getUser(this.state.defaultUser);
    }

    getUser = (query) => {
        axios
            .get("http://api.github.com/users/" + query, {
                params: this.state.searchParams,
            })
            .then((res) => {
                this.setState({ user: res.data });
            })
            .catch((err) => {
                this.setState({ user: null });
            });

        axios
            .get(`http://api.github.com/users/${query}/repos`)
            .then((res) => {
                this.setState({ repos: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    searchUser = (query) => {
        this.getUser(query);
    };

    render() {
        return (
            <div className="container">
                <Header searchUser={this.searchUser} />
                {this.state.user ? (
                    <React.Fragment>
                        <UserInfo user={this.state.user} />
                        <hr />
                        {this.state.repos.length ? (
                            <UserRepo repos={this.state.repos} />
                        ) : (
                            <h3>There is no repository!</h3>
                        )}
                    </React.Fragment>
                ) : (
                    <NotFound />
                )}
                <Footer />
            </div>
        );
    }
}

export default App;

//7174cbd7a05cc08023d8356bfdd7b0fea7deca04
// Client ID
// 535cfd6d6dc3598c7ada

//http://api.github.com/users/<USER_NAME>?client_id=<YOUR_CLIENT_ID>&client_secret=<YOUR_CLIENT_SECRET>&sort=created
//http://api.github.com/users/hmohajer?client_id=535cfd6d6dc3598c7ada&client_secret=7174cbd7a05cc08023d8356bfdd7b0fea7deca04&sort=created
//http://api.github.com/users/torvalds?client_id=535cfd6d6dc3598c7ada&client_secret=7174cbd7a05cc08023d8356bfdd7b0fea7deca04&sort=created

// http://api.github.com/users/torvalds/repos?client_id=&client_secret=&sort=created
