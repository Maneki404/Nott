import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import Appbar from "./components/Appbar";
import Note from "./components/Note";
import Theme from "./constants/Theme";

const Notes = [
  {
    id: 1,
    style: { backgroundColor: Theme.pinkNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 2,
    style: { backgroundColor: Theme.purpleNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 3,
    style: { backgroundColor: Theme.blueNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 4,
    style: { backgroundColor: Theme.yellowNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 5,
    style: { backgroundColor: Theme.purpleNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 6,
    style: { backgroundColor: Theme.blueNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 7,
    style: { backgroundColor: Theme.yellowNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 8,
    style: { backgroundColor: Theme.purpleNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 9,
    style: { backgroundColor: Theme.blueNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
  {
    id: 10,
    style: { backgroundColor: Theme.yellowNote },
    text: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Appbar
        onPress={() => navigation.openDrawer()}
        font={styles.jostExtraBold}
      />
      <LinearGradient
        colors={[Theme.appbar, Theme.background]}
        style={styles.gradient}
      />
      <View style={styles.notesContainer}>
        <View style={styles.notes}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={Notes}
            renderItem={(note) => (
              <Note style={note.item.style} text={note.item.text}></Note>
            )}
            keyExtractor={(note) => note.id}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        inactiveBackgroundColor={Theme.appbar}
        label={() => <Text style={Theme.appbar}>About</Text>}
        onPress={() => alert("Link to help")}
      />
      <DrawerItem
        inactiveBackgroundColor={Theme.appbar}
        label={() => <Text style={Theme.appbar}>Log Out</Text>}
        onPress={() => alert("Link to help")}
      />
      <View style={(style = styles.version)}>
        <Text>version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Jost-ExtraBold": require("./assets/fonts/Jost-ExtraBold.ttf"),
    "Jost-Black": require("./assets/fonts/Jost-Black.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="About"
          children={Home}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
  },
  notesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  notes: {
    paddingBottom: 100,
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: "30%",
    width: "100%",
    position: "absolute",
    top: 90,
  },
  version: {
    alignItems: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  jostBold: {
    fontFamily: "Jost-Bold",
  },
  jostMedium: {
    fontFamily: "Jost-Medium",
  },
  jostRegular: {
    fontFamily: "Jost-Regular",
  },
  jostSemiBold: {
    fontFamily: "Jost-SemiBold",
  },
  jostExtraBold: {
    fontFamily: "Jost-ExtraBold",
  },
  jostBlack: {
    fontFamily: "Jost-Black",
  },
});
