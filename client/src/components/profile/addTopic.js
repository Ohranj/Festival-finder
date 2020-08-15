import React from "react";

import { connect } from "react-redux";
import { addTopic } from "../../actions/index";

class AddTopic extends React.Component {
    state = {
        topicName: "",
    };

    addNewTopic = (e) => {
        e.preventDefault();
        if (this.props.topics.length < 10) {
            this.props.newTopicAdded();
            return this.props.addTopic(this.state.topicName);
        }
        return alert("You have reached the maximum amount of topics");
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <form onSubmit={(e) => this.addNewTopic(e)}>
                    <input
                        type="text"
                        placeholder="Add a topic..."
                        onChange={(e) =>
                            this.setState({ topicName: e.target.value })
                        }
                    />
                    <button
                        type="submit"
                        className="ui button"
                        style={{
                            color: "orange",
                            backgroundColor: "white",
                            border: "1px solid black",
                        }}
                    >
                        Add Topic
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps, { addTopic })(AddTopic);
