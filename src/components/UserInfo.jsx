import React from "react";
import PropTypes from "prop-types";

function UserInfo({user}) {
    return (
        <div className="container">
            <div className=" row mt-3">
                <div className="col-2">
                    <img className="w-100" src={user.avatar_url} alt="user avatar" />
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Full name: <b>{user.name}</b></li>
                        <li className="list-group-item">Username: <b>{user.login}</b></li>
                        <li className="list-group-item">Location: <b>{user.location}</b></li>
                        <li className="list-group-item">Email Address: <b>{user.email}</b></li>
                    </ul>
                </div>
                {/* <div className="col"></div> */}
            </div>
        </div>
    );
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserInfo;
