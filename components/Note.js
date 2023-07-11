import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../constants/Theme";

const Note = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={10}>
        {props.text}
      </Text>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    width: "47%",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
});
