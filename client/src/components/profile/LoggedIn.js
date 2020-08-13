import React from "react";
import axios from "axios";

import { connect } from "react-redux";
import { viewLibrary } from "../../actions/index";

class LoggedIn extends React.Component {
    state = {
        articlesInDatabase: [],
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "articles",
        }).then(({ data }) => {
            const articles = data;
            this.setState({
                articlesInDatabase: articles,
            });
        });
    }

    render() {
        return (
            <div
                className="ui grid"
                style={{
                    paddingTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div className="ten wide column centered">
                    Hey {this.props.user} welcome back...
                </div>
                <div className="ten wide column centered">
                    Here are your saved articles
                </div>
                <div className="ten wide column centered">
                    {this.state.articlesInDatabase.map((article) => {
                        return (
                            <div key={article._id}>{article.articleTitle}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        library: state.library,
    };
};

export default connect(mapStateToProps, viewLibrary)(LoggedIn);
