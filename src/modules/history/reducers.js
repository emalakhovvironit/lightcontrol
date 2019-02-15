import { handleActions } from "redux-actions";
import { fetchHistory, addHistory } from "./actions";

const defaultState = {};
const history = handleActions(
  {
    [fetchHistory]: (state, { payload }) => {
      return state;
    },
    [addHistory]: (state, { payload }) => {
      if (!state[payload.name]) {
        return { ...state, [payload.name]: payload.id };
      }
      return state;
    }
  },
  defaultState
);

export default history;
