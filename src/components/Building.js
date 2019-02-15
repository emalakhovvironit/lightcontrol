import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { toggleLight } from "../modules/buildings/actions";
import { generateRoomStyles, generateLampStyles } from "../helpers";
class Building extends React.Component {
  lampToggle = (lid, mode) => () => {
    this.props.toggleLight({
      lid,
      mode: mode ? "turn-off" : "turn-on",
      bid: this.props.building.bid
    });
  };
  render() {
    return (
      <View style={style.container}>
        {this.props.building.rooms.map((room, id) => (
          <View key={id + room[0]} style={generateRoomStyles(...room).room} />
        ))}
        {this.props.building.lamps.map((lamp, id) => (
          <TouchableOpacity
            key={id + lamp.coordinates[0]}
            onPress={this.lampToggle(id, lamp.turnedOn)}
            style={
              generateLampStyles(
                lamp.coordinates[0],
                lamp.coordinates[1],
                lamp.turnedOn
              ).room
            }
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ building: state.building });

const mapDispatchToProps = {
  toggleLight
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Building);

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  }
});
