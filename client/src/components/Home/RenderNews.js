import React from "react";

class RenderNews extends React.Component {
    componentDidUpdate() {
        this.refs[0].scrollIntoView();
    }

    render() {
        if (!this.props.countrySelected) {
            return null;
        } else if (this.props.articles.length === 0) {
            return (
                <div style={{ marginTop: "5vh", padding: "0 5vw" }}>
                    Unfortunately we have no articles to display. Please try an
                    alternate country
                </div>
            );
        }

        return (
            <div className="ui items articleParentContainer">
                {this.props.articles.map((article, index) => {
                    return (
                        <div
                            key={index}
                            className="item articleContainer"
                            ref={index}
                        >
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
                })}
            </div>
        );
    }
}

export default RenderNews;
