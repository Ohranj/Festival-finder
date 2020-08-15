import React from "react";
import axios from "axios";

class FetchArticles extends React.Component {
    state = {
        dateFrom: "",
        dateTo: "",
    };

    fetchArticles() {
        axios({
            method: "get",
            url: "/news/topic",
            params: {
                topic: this.props.selectedTopic,
                dateFrom: this.state.dateFrom,
                dateTo: this.state.dateTo,
            },
        }).then(({ data }) => {
            this.props.getFetchedArticles(data.articles);
        });
    }

    setParams({ target }) {
        this.setState({
            [target.name]: target.value,
        });
    }

    render() {
        return (
            <div className="fetchArticleRow">
                <div className="field">
                    <label>From</label>
                    <input
                        type="date"
                        name="dateFrom"
                        onChange={(e) => this.setParams(e)}
                    />
                </div>
                <div className="field">
                    <label>To</label>
                    <input
                        type="date"
                        name="dateTo"
                        onChange={(e) => this.setParams(e)}
                    />
                </div>
                <button
                    disabled={!this.props.selectedTopic}
                    className="ui button field basic orange"
                    onClick={() => this.fetchArticles()}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default FetchArticles;
