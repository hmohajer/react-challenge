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
                client_id: "",
                client_secret: "",
                repoCurrentPage: 1,
            },
        };
    }

    componentDidMount() {
        this.getUser(this.state.defaultUser);
    }

    render() {
        return (
            <div className="container">
                <Header searchUser={this.searchUser} />
                {this.state.user ? (
                    <React.Fragment>
                        <UserInfo user={this.state.user} />
                        <hr />
                        <UserRepo
                            repos={this.state.repos}
                            currentPage={this.state.repoCurrentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </React.Fragment>
                ) : (
                    <NotFound />
                )}
                <Footer />
            </div>
        );
    }

    getUser = (query) => {
        axios
            .get("http://api.github.com/users/" + query, {
                params: this.state.searchParams,
            })
            .then((res) => {
                this.setState(
                    { user: res.data, repoCurrentPage: 1 },
                    this.getRepo
                );
            })
            .catch((err) => {
                this.setState({ user: null });
                console.log(err);
            });
    };

    getRepo = () => {
        axios
            .get(this.state.user.repos_url)
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

    handlePageChange = (page) => {
        this.setState({ repoCurrentPage: page });
    };
}

export default App;
