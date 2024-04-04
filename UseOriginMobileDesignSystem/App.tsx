import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Button } from "./components/Button/Button";
import { IconButton } from "./components/IconButton/IconButton";
import { PasswordInput } from "./components/PasswordInput/PasswordInput";
import { TextInput } from "./components/TextInput/TextInput";
import { Typography } from "./components/Typography/Typography";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { PaperProvider } from "react-native-paper";

function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Typography variant="h5" gutterBottom>Origin Financial - Design System</Typography>

          <Typography variant="body1">Some examples below:</Typography>

          <View style={styles.separator} />

          <Button 
            text="First Button"
            variant="contained"
            onPress={() => alert("First Button Pressed")}
          />

          <View style={styles.separator} />

          <IconButton
            icon="account"
            onPress={() => alert("Account Icon Pressed")}
          />

          <View style={styles.separator} />

          <PasswordInput
            label="Password Input"
            placeholder="Placeholder"
            showRequirements
            showStrengthIndicator
          />
          
          <View style={styles.separator} />

          <TextInput
            label="Text Input Filled"
            placeholder="Placeholder"
            variant="filled"
          />
          
          <View style={styles.separator} />

          <Tooltip title="Tooltip text">
            <Typography variant="subtitle1">Click here to see a tooltip</Typography>
          </Tooltip>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 16
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 32
  }
});

export default AppEntryPoint;
