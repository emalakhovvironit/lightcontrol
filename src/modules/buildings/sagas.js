import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  fetchBuildingByAddress,
  fetchBuildingById,
  toggleLight,
  addBuildingToState
} from "./actions";
import { Alert } from "react-native";
import { addHistory } from "../history/actions";
import fetchD from "../../api";

function* requestBuildingByAddress({ payload }) {
  try {
    const data = yield call(() =>
      fetchD(`/building/?address=${payload.address}`)
    );
    const building = data.json()[0] ? data.json()[0] : {};
    if (building.address) {
      yield put(addHistory({ name: building.address, id: building.id }));
      yield call(requestBuildingById, {
        payload: { id: building.id, navigate: payload.navigate }
      });
    } else {
      Alert.alert("Couldn't find any building at this address");
    }
  } catch (error) {
    console.error(error);
  }
}

function* requestBuildingById({ payload }) {
  try {
    const data = yield call(() => fetchD(`/building/${payload.id}`));
    const building = data.json();
    yield put(addBuildingToState({ ...building, bid: payload.id }));
    if (payload.navigate) {
      yield call(() => payload.navigate("Building"));
    }
  } catch (error) {
    console.error(error);
  }
}

function* requestToggleLight({ payload }) {
  try {
    const data = yield call(() =>
      fetchD(`/building/${payload.bid}/lamp/${payload.lid}/${payload.mode}`)
    );
    const response = data.json();
    if (response.message === "ok") {
      Alert.alert("Successfully completed this operation");
      yield call(requestBuildingById, { payload: { id: payload.bid } });
    }
  } catch (error) {
    console.error(error);
  }
}

export function* buildingWatcher() {
  yield takeEvery(fetchBuildingByAddress, requestBuildingByAddress);
  yield takeEvery(fetchBuildingById, requestBuildingById);
  yield takeEvery(toggleLight, requestToggleLight);
}
