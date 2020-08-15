import React from "react";
import axios from "axios";

import AddTopic from "./addTopic";
import SaveTopic from "./SaveTopics";

import { connect } from "react-redux";
import { getTopicsFromDatabase, deleteTopic } from "../../actions/index";

class LoggedIn extends React.Component {
    state = {
        topicAdded: false,
    };

    componentDidMount() {
        this.props.getTopicsFromDatabase();
    }

    newTopicAdded = () => {
        this.setState({
            topicAdded: true,
        });
    };

    resetTopicAdded = () => {
        this.setState({
            topicAdded: false,
        });
    };

    deleteSelectedTopic(topic) {
        this.props.deleteTopic(topic);
        axios({
            method: "delete",
            url: "/deletetopic",
            data: {
                topic,
            },
        });
    }

    render() {
        return (
            <div className="ui grid loggedInContainer">
                <div className="ten wide column centered">
                    Hey {this.props.user} welcome back...
                </div>
                <div className="ten wide column centered">
                    Here are the topics that interest you...you can add up to 10
                    :
                </div>
                <div className="eleven wide column centered topicContainer">
                    {this.props.topics.map((topic, index) => {
                        return (
                            <button
                                className="ui button orange topicBtn"
                                key={index}
                                onClick={() => this.deleteSelectedTopic(topic)}
                            >
                                {topic}
                            </button>
                        );
                    })}
                </div>
                <div>
                    <AddTopic newTopicAdded={this.newTopicAdded} />
                </div>
                <SaveTopic
                    topicAdded={this.state.topicAdded}
                    resetTopicAddedBtn={this.resetTopicAdded}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps, { getTopicsFromDatabase, deleteTopic })(
    LoggedIn
);
