import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/modules";
import Navigator from "./src/navigation";

class App extends React.Component {
  render() {
    const { fetchBuilding } = this.props;
    fetchBuilding && fetchBuilding();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
