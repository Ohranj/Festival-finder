import React from "react";
import axios from "axios";

class AddToLibrary extends React.Component {
    state = {
        articleState: "#000000",
        starTooltop: "Add to library",
        allowOnClick: true,
    };

    toChange = ({ description, title, url, urlToImage }, cb) => {
        axios({
            method: "post",
            url: "/addarticle",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                description,
                title,
                url,
                urlToImage,
            },
        })
            .then((response) => {
                console.log(response);
                cb();
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    render() {
        return (
            <div
                className="ui icon faveIcon"
                data-tooltip={this.state.starTooltop}
                data-position="bottom right"
                onClick={
                    this.state.allowOnClick
                        ? () =>
                              this.toChange(this.props.article, () => {
                                  this.setState({
                                      articleState: "#ffad33",
                                      starTooltop: "Article saved",
                                      allowOnClick: false,
                                  });
                              })
                        : null
                }
            >
                <i
                    className="far fa-star icon"
                    style={{ color: this.state.articleState }}
                ></i>
            </div>
        );
    }
}

export default AddToLibrary;
