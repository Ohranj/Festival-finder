import React from "react";
import axios from "axios";

class Profile extends React.Component {
    componentDidMount() {
        axios({
            method: "get",
            url: "/api/user",
        }).then(({ data }) => console.log(data));
    }

    render() {
        return <div>ok</div>;
    }
}

export default Profile;
