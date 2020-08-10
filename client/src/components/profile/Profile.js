import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { storeUser } from "../../actions/index";

import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";

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
            return <NotLoggedIn />;
        } else {
            return <LoggedIn user={this.props.user.name} />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { storeUser })(Profile);
