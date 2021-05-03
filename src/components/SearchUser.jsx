import React, { Component } from "react";

export class SearchUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
        };
    }


    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handelSearch = (e) => {
        e.preventDefault();
        this.props.search(this.state.query);
        this.setState({query: ""});
    }
    render() {
        return (
            <form className="d-flex" onSubmit={this.handelSearch}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.query}
                onChange={this.handleInput}
                name="query"
                />
            <button
                className="btn btn-outline-success"
                type="submit"
                >
                Search
            </button>
        </form>
        );
    }
}

export default SearchUser;


