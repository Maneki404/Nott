import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import Appbar from "./components/Appbar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Jost-ExtraBold": require("./assets/fonts/Jost-ExtraBold.ttf"),
    "Jost-Black": require("./assets/fonts/Jost-Black.ttf"),
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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Appbar font={styles.jostExtraBold} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
