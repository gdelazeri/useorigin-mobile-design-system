import React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import { PasswordInputProps } from "./types";
import { TextInput } from "../TextInput/TextInput";

export const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <TextInput
      {...props}
      secureTextEntry={!showPassword}
      rightElement={(
        <RNPTextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />
      )}
    />
  );
};
