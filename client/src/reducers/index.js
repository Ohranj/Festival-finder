import { combineReducers } from "redux";
import userReducer from "./userReducer";
import topicsReducer from "./topicsReducer";

export default combineReducers({
    user: userReducer,
    topics: topicsReducer,
});
