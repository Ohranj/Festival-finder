import React from "react";
import axios from "axios";

import { connect } from "react-redux";
import { viewTopics } from "../../actions/index";

class SaveTopic extends React.Component {
    saveTopicsToDatabase() {
        axios({
            method: "post",
            url: "/addtopic",
            data: {
                topic: this.props.topics,
            },
        });
    }
    render() {
        return (
            <button
                style={{ width: "20vw" }}
                onClick={() => this.saveTopicsToDatabase()}
            >
                Adding new topics? Check out the article below...Then make sure
                to click the button to save your change
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps, { viewTopics })(SaveTopic);
