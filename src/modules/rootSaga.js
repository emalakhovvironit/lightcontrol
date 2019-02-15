import { all } from "redux-saga/effects";
import { buildingWatcher } from "./buildings/sagas";

export default function* rootSaga() {
  yield all([buildingWatcher()]);
}
