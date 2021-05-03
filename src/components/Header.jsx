import React from "react";
import SearchBar from "./SearchBar";

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand ms-5">
                    <h1>GitHub User Finder</h1>
                </span>
                <SearchBar search={props.searchUser} />
            </div>
        </nav>
    );
}

export default Header;
