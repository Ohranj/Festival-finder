import React from "react";
import axios from "axios";

class News extends React.Component {
    getNews() {
        //DO AXIOS FETCH TO BACKEND AND THEN FROM THEIR TO NEWS API
        console.log(this.props.countryCode);
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
                    </div>
                )}
            </div>
        );
    }
}

export default News;
