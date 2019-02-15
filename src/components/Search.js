import { TextInput, View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import React from "react";
import { connect } from "react-redux";
import { fetchBuildingByAddress } from "../modules/buildings/actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSearch = () => {
    this.props.fetchBuildingByAddress({
      address: this.state.text,
      navigate: this.props.navigation.navigate
    });
  };
  render() {
    return (
      <View style={style.container}>
        <Input
          style={{ height: 40 }}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          onPress={this.handleSearch}
          containerStyle={{ marginTop: 20 }}
          title="Search"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchBuildingByAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

const style = StyleSheet.create({
  container: {
    marginTop: 40
  }
});
