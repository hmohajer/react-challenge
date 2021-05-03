import React from "react";

function NotFound() {
    return (
        <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Sorry!</h4>
            <p>I couldn't find the user name you searched.</p>
            <hr />
            <p className="mb-0">
                Make sure your username is correct , and try one more time.
            </p>
        </div>
    );
}

export default NotFound;
