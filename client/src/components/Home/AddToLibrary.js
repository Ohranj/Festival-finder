import React from "react";

class AddToLibrary extends React.Component {
    toChange = (article) => {
        console.log(article);
    };

    render() {
        return (
            <div
                className="ui icon faveIcon"
                data-tooltip="Add to library"
                data-position="bottom right"
                onClick={() => this.toChange(this.props.article)}
            >
                <i className="far fa-star icon"></i>
            </div>
        );
    }
}

export default AddToLibrary;
