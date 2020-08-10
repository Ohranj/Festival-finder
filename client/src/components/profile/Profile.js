import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { storeUser } from "../../actions/index";

class Profile extends React.Component {
    state = {
        isAuthenticating: true,
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "/api/user",
        }).then(({ data }) => {
            this.props.storeUser(data);
            this.setState({
                isAuthenticating: false,
            });
        });
    }

    render() {
        if (this.state.isAuthenticating) {
            return null;
        } else if (!this.props.user.userID) {
            return (
                <div
                    className="ui grid middle aligned"
                    style={{ height: "80vh" }}
                >
                    <div
                        className="twelve wide column centered"
                        style={{
                            textAlign: "center",
                        }}
                    >
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
        } else {
            return <div>{this.props.user.username}</div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { storeUser })(Profile);
