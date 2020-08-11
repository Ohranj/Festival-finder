import React from "react";
import axios from "axios";

import RenderNews from "./RenderNews";

class News extends React.Component {
    state = {
        articles: [],
        countrySelected: false,
    };

    getNews() {
        axios({
            method: "get",
            url: "/news",
            params: {
                countryCode: this.props.countryCode,
            },
        }).then(({ data }) => {
            const firstPage = [];
            const secondPage = [];
            data.articles.forEach((article, index) => {
                index < 10 ? firstPage.push(article) : secondPage.push(article);
            });
            return this.setState({
                articles: [firstPage, secondPage],
                countrySelected: true,
            });
        });
    }

    render() {
        return (
            <div className="NewsInnerContainer">
                <div className="newsCountryHeader">
                    <h3>{this.props.country}</h3>
                </div>
                {!this.props.country ? (
                    <div>Click a country on the map to start</div>
                ) : (
                    <div>
                        <button
                            className="ui button orange"
                            onClick={() => this.getNews()}
                        >
                            Get News
                        </button>
                        <RenderNews
                            articles={this.state.articles}
                            countrySelected={this.state.countrySelected}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default News;
