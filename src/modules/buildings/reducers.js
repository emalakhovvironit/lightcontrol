import { handleActions } from "redux-actions";
import { addBuildingToState } from "./actions";

const defaultState = {};
const building = handleActions(
  {
    [addBuildingToState]: (state, { payload }) => {
      return payload;
    }
  },
  defaultState
);

export default building;
