import React from "react";

class RenderTopicArticle extends React.Component {
    render() {
        return this.props.fetchedArticle && this.props.article ? (
            <div className="ui items">
                <div className="item" style={{ border: "1px solid black" }}>
                    <div className="image">
                        <img
                            style={{ margin: "auto 0" }}
                            src={this.props.article.urlToImage}
                            alt={this.props.article.title}
                        />
                    </div>
                    <div className="content middle aligned">
                        <h2>{this.props.article.title}</h2>
                        <div className="description">
                            <p>{this.props.article.description}</p>
                        </div>
                        <div className="extra">
                            <div className="ui right floated orange button">
                                <a
                                    href={this.props.article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#ffffff" }}
                                >
                                    Read article?
                                </a>
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

export default RenderTopicArticle;
