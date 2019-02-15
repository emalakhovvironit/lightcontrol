import { createAction } from "redux-actions";

export const fetchBuildingByAddress = createAction("FETCH_BUILDING");
export const fetchBuildingById = createAction("FETCH_BUILDING_BY_ID");
export const toggleLight = createAction("TOGGLE_LIGHT");
export const addBuildingToState = createAction("ADD_BUILDING_TO_STATE");
