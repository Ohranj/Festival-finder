import React from "react";

class RenderTopicResults extends React.Component {
    render() {
        return (
            <div className="ui grid centered topicResultsContainer">
                {this.props.articles.map((article, index) => {
                    return (
                        <div className="four wide column" key={index}>
                            <div class="item topicNewsCard">
                                <div class="image">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                    />
                                </div>
                                <div class="content">
                                    <h3
                                        class="header topicArticleHeader"
                                        style={{ padding: "0" }}
                                    >
                                        {article.title}
                                    </h3>

                                    <div class="description">
                                        <p>{article.description}</p>
                                    </div>
                                    <div class="extra">
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div class="ui right floated primary button">
                                                View Article
                                                <i class="right chevron icon"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default RenderTopicResults;
