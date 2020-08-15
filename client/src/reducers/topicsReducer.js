export default (state = [], action) => {
    switch (action.type) {
        case "VIEW_TOPICS":
            return state;
        case "GET_TOPICS_FROM_DATABASE":
            state = action.topics;
            return state;
        case "ADD_TOPIC":
            if (state.length < 10) {
                return state.includes(action.topic)
                    ? state
                    : [...state, action.topic];
            } else {
                return state;
            }
        case "DELETE_TOPIC":
            return state.filter((topic) => topic !== action.topic);
        default:
            return state;
    }
};
