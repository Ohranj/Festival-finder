import React from "react";

const NotLoggedIn = () => {
    return (
        <div className="ui grid middle aligned noUserProfilePage">
            <div className="twelve wide column centered">
                You must
                <a href="/auth/google" className="item">
                    <button className="ui button googleBtn">
                        <i className="fab fa-google material-icons right"></i>
                        Sign in with Google
                    </button>
                </a>
                to view your profile
            </div>
        </div>
    );
};

export default NotLoggedIn;
