import { StyleSheet, Dimensions } from "react-native";

export const generateRoomStyles = (x1, y1, x2, y2) => {
  var { height, width } = Dimensions.get("screen");
  const widthMul = width / 240;
  const heightMul = height / 200;
  return StyleSheet.create({
    room: {
      position: "absolute",
      top: y1 * heightMul,
      left: x1 * widthMul,
      width: (x2 - x1) * widthMul,
      height: (y2 - y1) * heightMul,
      borderColor: "black",
      borderWidth: 1
    }
  });
};

export const generateLampStyles = (x, y, turnedOn) => {
  var { height, width } = Dimensions.get("window");
  const widthMul = width / 240;
  const heightMul = height / 200;
  return StyleSheet.create({
    room: {
      position: "absolute",
      top: y * heightMul,
      left: x * widthMul,
      width: 20 * widthMul,
      height: 20 * widthMul,
      borderRadius: 50,
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: turnedOn ? "yellow" : "white"
    }
  });
};
