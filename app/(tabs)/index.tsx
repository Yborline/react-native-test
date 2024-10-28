import { StyleSheet, View, Text } from "react-native";

import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    DMSerifItal: require("../../assets/fonts/DMSerif/DMSerifText-Italic.ttf"),
    DMSerifReg: require("../../assets/fonts/DMSerif/DMSerifText-Regular.ttf"),
    Rubick: require("../../assets/fonts/Rubick/RubikWetPaint-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Link href="./register" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
