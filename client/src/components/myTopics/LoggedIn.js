import React from "react";

import RenderTopicResults from "./RenderTopicResults";
import FetchArticles from "./FetchArticles";

import { connect } from "react-redux";
import { getTopicsFromDatabase } from "../../actions/index";

class LoggedIn extends React.Component {
    state = {
        selectedTopic: "",
        storedArticles: [],
    };

    componentDidMount() {
        this.props.getTopicsFromDatabase();
    }

    selectTopic(topic) {
        if (this.state.selectedTopic.includes(topic)) {
            this.setState({
                selectedTopic: "",
            });
        } else {
            this.setState({
                selectedTopic: topic,
            });
        }
    }

    getFetchedArticles = (articles) => {
        this.setState({
            storedArticles: articles,
        });
    };

    render() {
        return (
            <div>
                <div className="topicRow">
                    {this.props.topics.map((topic, index) => {
                        return (
                            <button
                                name={topic}
                                className="ui button orange topicBtn"
                                key={index}
                                onClick={(e) => this.selectTopic(e.target.name)}
                            >
                                {topic}
                            </button>
                        );
                    })}
                    <FetchArticles
                        selectedTopic={this.state.selectedTopic}
                        getFetchedArticles={this.getFetchedArticles}
                    />
                </div>
                <RenderTopicResults articles={this.state.storedArticles} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps, { getTopicsFromDatabase })(LoggedIn);
