import React from "react";
import axios from "axios";

import { connect } from "react-redux";
import { storeUser } from "../../actions/index";

class MyTopics extends React.Component {
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
            return <div>Not logged in</div>;
        } else {
            return <div>Logged in</div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps, { storeUser })(MyTopics);
