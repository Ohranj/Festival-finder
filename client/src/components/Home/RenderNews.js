import React from "react";

class RenderNews extends React.Component {
    render() {
        if (!this.props.countrySelected) {
            return null;
        } else if (this.props.articles.length === 0) {
            return <div>There are no articles</div>;
        }
        return this.props.articles.map((article, index) => {
            return <div key={index}>{article.title}</div>;
        });
    }
}

export default RenderNews;
