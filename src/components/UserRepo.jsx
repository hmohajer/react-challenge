import React from "react";

function UserRepo({ repos }) {
    return (
        <div className="container">
            <h5>
                User repositories{" "}
                <span className="badge rounded-pill bg-secondary">
                    {repos.length}
                </span>
            </h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Language</th>
                        <th scope="col">Access</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.map((repo, index) => (
                        <tr key={repo.id}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <a href={repo.html_url}>{repo.name}:</a>
                            </td>
                            <td>{repo.description}</td>
                            <td>{repo.language}</td>
                            <td>{repo.private ? "Privet" : "Public"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserRepo;
