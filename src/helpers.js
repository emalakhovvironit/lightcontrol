import { StyleSheet, Dimensions } from "react-native";

export const generateRoomStyles = (x1, y1, x2, y2) => {
  console.log(Dimensions.get("screen"));
  return StyleSheet.create({
    room: {
      position: "absolute",
      top: y1,
      left: x1,
      width: x2 - x1 - 1,
      height: y2 - y1 - 1,
      borderColor: "black",
      borderWidth: 1
    }
  });
};

export const generateLampStyles = (x, y, turnedOn) => {
  return StyleSheet.create({
    room: {
      position: "absolute",
      top: y,
      left: x,
      width: 20,
      height: 20,
      borderRadius: 50,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: turnedOn ? "yellow" : "white"
    }
  });
};
