import React from "react";
import axios from "axios";

import AddTopic from "./addTopic";
import SaveTopic from "./SaveTopics";

import { connect } from "react-redux";
import { getTopicsFromDatabase, deleteTopic } from "../../actions/index";

class LoggedIn extends React.Component {
    componentDidMount() {
        this.props.getTopicsFromDatabase();
    }

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
            <div
                className="ui grid"
                style={{
                    paddingTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div className="ten wide column centered">
                    Hey {this.props.user} welcome back...
                </div>
                <div className="ten wide column centered">
                    Here are the topics that interest you...you can add up to 10
                    :
                </div>
                <div className="ten wide column centered topicContainer">
                    {this.props.topics.map((topic, index) => {
                        return (
                            <button
                                className="ui button orange"
                                key={index}
                                style={{
                                    borderRadius: "20px",
                                    margin: "0 5px",
                                    width: "10%",
                                }}
                                onClick={() => this.deleteSelectedTopic(topic)}
                            >
                                {topic}
                            </button>
                        );
                    })}
                </div>
                <div>
                    <AddTopic />
                </div>
                <SaveTopic />
                <div>
                    Topic added popup - Here something that you might like -
                    return full article
                </div>
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
