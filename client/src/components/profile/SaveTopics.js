import React from "react";
import axios from "axios";

import RenderTopicArticle from "./RenderTopicArticle";

import { connect } from "react-redux";
import { viewTopics } from "../../actions/index";

class SaveTopic extends React.Component {
    state = {
        articleTopic: [],
        fetchingArticle: false,
        fetchedArticle: false,
    };

    saveTopicsToDatabase() {
        this.setState({
            fetchingArticle: true,
            fetchedArticle: false,
        });
        axios({
            method: "post",
            url: "/addtopic",
            data: {
                topic: this.props.topics,
            },
        }).then(({ data }) => {
            this.props.resetTopicAddedBtn();
            this.setState({
                articleTopic: data.articles[0],
            });
            setTimeout(() => {
                this.setState({
                    fetchingArticle: false,
                    fetchedArticle: true,
                });
            }, 1500);
        });
    }

    render() {
        return (
            <div className="ten wide column centered">
                <h3>Adding a new topic?</h3>
                <p>
                    When you add a topic(s) above make sure to save your changes
                    by clicking the save button. Once done we'll provide you
                    with an article we think you'll like. If you don't, click
                    it's button above to remove it
                </p>
                <div className="four wide column centered">
                    <button
                        disabled={!this.props.topicAdded}
                        className="ui button saveTopicBtn"
                        onClick={() => this.saveTopicsToDatabase()}
                    >
                        Save new topics
                    </button>
                </div>
                <div style={{ paddingTop: "50px" }}>
                    {this.state.fetchingArticle ? (
                        <div style={{ textAlign: "center" }}>
                            <i className="fas fa-spinner fa-spin"></i>
                            <p>
                                As promised here's something we think you'll
                                like
                            </p>
                        </div>
                    ) : null}
                    <RenderTopicArticle
                        article={this.state.articleTopic}
                        fetchedArticle={this.state.fetchedArticle}
                    />
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

export default connect(mapStateToProps, { viewTopics })(SaveTopic);
