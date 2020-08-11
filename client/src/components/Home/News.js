import React from "react";

class News extends React.Component {
    render() {
        return (
            <div>
                {this.props.country}
                <button className="ui button">View News</button>
            </div>
        );
    }
}

export default News;
