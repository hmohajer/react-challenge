import React, { Component } from "react";
import Pagination from "./Pagination";
import RepositoryList from "./RepositoryList";
import _ from "lodash";
import PropTypes from "prop-types";


export class UserRepo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSize: 5,
        };
    }

    paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items).slice(startIndex).take(pageSize).value();
    };

    render() {
        const { repos, currentPage, onPageChange } = this.props;
        const reposCount = repos.length;
        return (
            <div className="container">
                {reposCount ? (
                    <React.Fragment>
                        <h5>
                            Repositories{" "}
                            <span className="badge rounded-pill bg-secondary">
                                {reposCount}
                            </span>
                        </h5>
                        <RepositoryList
                            repos={this.paginate(
                                repos,
                                currentPage,
                                this.state.pageSize
                            )}
                        />
                        <Pagination
                            reposCount={reposCount}
                            onPageChange={onPageChange}
                            currentPage={currentPage}
                            pageSize={this.state.pageSize}
                        />
                    </React.Fragment>
                ) : (
                    <h3>There is no repository!</h3>
                )}
            </div>
        );
    }
}


UserRepo.propTypes = {
    repos: PropTypes.object.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default UserRepo;
