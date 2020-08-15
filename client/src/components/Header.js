import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { storeUser } from "../actions/index";

class Header extends React.Component {
    signIn() {
        return (
            <a href="/auth/google" className="item">
                <button className="ui button googleBtn googleBtnSignIn">
                    <i className="fab fa-google material-icons right"></i>
                    Sign in with Google
                </button>
            </a>
        );
    }

    signOut() {
        return (
            <a href="/api/logout" className="item">
                <button className="ui button googleBtn googleBtnSignOut">
                    <i className="fab fa-google material-icons right"></i>
                    Sign out of Google
                </button>
            </a>
        );
    }

    render() {
        return (
            <div className="ui segment header">
                <div className="ui secondary menu">
                    <div>
                        <Link to="/">
                            <h2 className="headerName">News Finder</h2>
                        </Link>
                    </div>
                    <div style={{ marginLeft: "40px" }}>
                        <Link to="/mytopics">
                            <h3 className="headerName">Search via my Topics</h3>
                        </Link>
                    </div>
                    <div className="rightHeader">
                        {this.props.user.userID
                            ? this.signOut()
                            : this.signIn()}
                        <Link to="/profile" className="item">
                            <h3>View profile</h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { storeUser })(Header);
