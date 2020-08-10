import React from "react";

const LoggedIn = (props) => {
    return (
        <div class="ui grid" style={{ paddingTop: "50px" }}>
            <div className="ten wide column centered">
                Hey {props.user} welcome back...
            </div>
        </div>
    );
};

export default LoggedIn;
