import React from "react";

function RepositoryList({ repos }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Repository Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Language</th>
                    <th scope="col">Access</th>
                </tr>
            </thead>
            <tbody>
                {repos.map((repo, index) => (
                    <tr key={repo.id}>
                        {/* <th scope="row">{repo.id}</th> */}
                        <td>
                            <a href={repo.html_url}>{repo.name}</a>
                        </td>
                        <td>{repo.description}</td>
                        <td>{repo.language}</td>
                        <td>{repo.private ? "Privet" : "Public"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RepositoryList;
