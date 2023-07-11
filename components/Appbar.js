import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Theme from "../constants/Theme";

const Appbar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity>
          <Feather
            style={styles.leftElement}
            name="menu"
            size={24}
            color={Theme.buttons}
            onPress={props.onPress}
          />
        </TouchableOpacity>
        <Text style={[styles.title, props.font, styles.leftElement]}>Nott</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity>
          <AntDesign
            style={styles.rightElement}
            name="plus"
            size={24}
            color={Theme.buttons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            style={styles.rightElement}
            name="delete"
            size={24}
            color={Theme.buttons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  screen: {
    alignContent: "space-between",
  },
  container: {
    width: "100%",
    backgroundColor: Theme.appbar,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  leftElement: {
    paddingRight: 20,
  },
  rightElement: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 38,
    color: Theme.appbarTitle,
  },
});

const drawerStyles = {
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
};
