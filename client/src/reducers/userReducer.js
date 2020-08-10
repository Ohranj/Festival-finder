const initialState = {
    userID: null,
    username: null,
    userImg: null,
    name: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "STORE_USER":
            return {
                ...state,
                userID: action.userID,
                username: action.username,
                userImg: action.userImg,
                name: action.name,
            };
        default:
            return state;
    }
};
