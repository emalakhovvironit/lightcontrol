import { combineReducers } from "redux";
import history from "./history/reducers";
import building from "./buildings/reducers";

export default combineReducers({ history, building });
