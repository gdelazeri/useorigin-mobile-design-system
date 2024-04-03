import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

function App() {
  return (
    <View style={styles.container}>
      <Text>Origin Financial - Mobile Design System</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
