import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage as storage } from "react-native";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;
