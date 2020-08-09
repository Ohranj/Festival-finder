import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui segment header">
            <div className="ui secondary menu">
                <a href="/auth/google" className="item">
                    <button
                        className="ui button"
                        style={{ backgroundColor: "#4286f5", color: "#ffffff" }}
                    >
                        <i className="fab fa-google material-icons right"></i>
                        Sign in with Google
                    </button>
                </a>
                <Link to="/profile" className="item">
                    View profile
                </Link>
            </div>
        </div>
    );
};

export default Header;
