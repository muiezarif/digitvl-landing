import {combineReducers} from "redux";
import fetchPublicDlinksProfileReducer from "./fetchPublicDlinksProfileReducer";
export default combineReducers({
    publicUserDlinks:fetchPublicDlinksProfileReducer,
})