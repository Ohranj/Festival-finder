import React from "react";

import AddToLibrary from "./AddToLibrary";

class RenderNews extends React.Component {
    state = {
        articlePageToRender: 0,
    };
    render() {
        if (!this.props.countrySelected) {
            return null;
        } else if (this.props.articles[0].length === 0) {
            return (
                <div style={{ marginTop: "5vh", padding: "0 5vw" }}>
                    Unfortunately we have no articles to display. Please try an
                    alternate country
                </div>
            );
        }
        return (
            <div className="ui items articleParentContainer">
                {this.props.articles[this.state.articlePageToRender].map(
                    (article, index) => {
                        return (
                            <div key={index} className="item articleContainer">
                                <AddToLibrary article={article} />
                                <div className="ui small image">
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="articleImg"
                                            src={article.urlToImage}
                                            alt="story thumbnail"
                                        />
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="header articleHeading">
                                        {article.title}
                                    </div>
                                    <div className="description articleDescription">
                                        <p>{article.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
                <button
                    className="ui button basic orange"
                    onClick={() =>
                        this.setState({
                            articlePageToRender:
                                this.state.articlePageToRender === 0 ? 1 : 0,
                        })
                    }
                >
                    {this.state.articlePageToRender === 0
                        ? "Next Page"
                        : "Previous Page"}
                </button>
            </div>
        );
    }
}

export default RenderNews;
