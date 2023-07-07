import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Theme from "../constants/Theme";

const Appbar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, props.font]}>Nott</Text>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Theme.appbar,
    paddingHorizontal: 40,
    paddingTop: 35,
    paddingBottom: 15,
  },
  title: {
    fontSize: 32,
    color: Theme.appbarTitle,
  },
});
