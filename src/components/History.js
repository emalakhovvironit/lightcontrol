import { Text, Button } from "react-native-elements";
import { View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { fetchBuildingById } from "../modules/buildings/actions";

class History extends React.Component {
  handlePress = (id) => () => {
    this.props.fetchBuildingById({
      navigate: this.props.navigation.navigate,
      id
    });
  };
  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <View>
        <Text>History of searched buildings</Text>
        {Object.keys(history).map((item) => (
          <Button
            key={item}
            onPress={this.handlePress(history[item])}
            containerStyle={{ marginTop: 20 }}
            title={item}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ history: state.history });

const mapDispatchToProps = { fetchBuildingById };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
