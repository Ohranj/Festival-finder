import React from "react";

class RenderNews extends React.Component {
    state = {
        articlePageToRender: 0,
    };
    render() {
        console.log(this.props);
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
            <div class="ui items" style={{ padding: "0 10px" }}>
                {this.props.articles[this.state.articlePageToRender].map(
                    (article, index) => {
                        return (
                            <div key={index} class="item articleContainer">
                                <div class="ui small image">
                                    <a href={article.url}>
                                        <img
                                            className="articleImg"
                                            src={article.urlToImage}
                                            alt="story thumbnail"
                                        />
                                    </a>
                                </div>
                                <div class="content">
                                    <div class="header articleHeading">
                                        {article.title}
                                    </div>
                                    <div class="description articleDescription">
                                        <p>{article.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }
}

export default RenderNews;
