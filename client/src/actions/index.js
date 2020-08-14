import axios from "axios";

//Auth reducer
export const storeUser = ({
    googleId,
    googleUsername,
    googleProfileImg,
    name,
}) => {
    return {
        type: "STORE_USER",
        userID: googleId,
        username: googleUsername,
        userImg: googleProfileImg,
        name,
    };
};

export const viewTopics = () => {
    return {
        type: "VIEW_TOPICS",
    };
};

export const addTopic = (topic) => {
    return {
        type: "ADD_TOPIC",
        topic,
    };
};

export const getTopicsFromDatabase = () => {
    return async (dispatch) => {
        const response = await axios.get("/topics");
        dispatch({
            type: "GET_TOPICS_FROM_DATABASE",
            topics: response.data,
        });
    };
};

export const deleteTopic = (topic) => {
    return {
        type: "DELETE_TOPIC",
        topic,
    };
};
