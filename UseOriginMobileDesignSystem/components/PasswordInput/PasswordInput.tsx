import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { passwordStrength } from 'check-password-strength';
import { ProgressBar, TextInput as RNPTextInput } from "react-native-paper";
import { PasswordInputProps } from "./types";
import { TextInput } from "../TextInput/TextInput";
import { Typography } from "../Typography/Typography";

export const PasswordInput = (props: PasswordInputProps) => {
  const { showStrengthIndicator, showRequirements } = props
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = React.useState('')
  
  const passwordStrengthColors = ['transparent', '#e54242', '#f99f4b', '#1493ff', '#37c565']
  const { id, value } = calculatePasswordStrength(password)

  return (
    <>
      <TextInput
        {...props}
        onChange={setPassword}
        secureTextEntry={!showPassword}
        rightElement={(
          <RNPTextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />
        )}
      />
      {showStrengthIndicator && (
        <View style={styles.strenghtContainer}>
          <ProgressBar progress={id/(passwordStrengthColors.length-1)} color={passwordStrengthColors[id]} style={styles.progressBar} />
          <Typography variant='subtitle2' color={passwordStrengthColors[id]}>{value}</Typography>
        </View>
      )}
      {showRequirements && (
        <View style={styles.requirementsContainer}>
          <Typography variant='body2' color="#333">Minimum length of 8 characters</Typography>
          <Typography variant='body2' color="#333">Must contain uppercase and lowercase letters</Typography>
          <Typography variant='body2' color="#333">Must contain at least one number</Typography>
          <Typography variant='body2' color="#333">Must contain at least one special character</Typography>
        </View>
      )}
    </>
  );
};

const calculatePasswordStrength = (password: string) => {
  const options = [
    {
      id: 0,
      value: "",
      minDiversity: 0,
      minLength: 0
    },
    {
      id: 1,
      value: "Weak",
      minDiversity: 0,
      minLength: 2
    },
    {
      id: 2,
      value: "Fair",
      minDiversity: 2,
      minLength: 6
    },
    {
      id: 3,
      value: "Good",
      minDiversity: 3,
      minLength: 6
    },
    {
      id: 4,
      value: "Strong",
      minDiversity: 4,
      minLength: 10
    }
  ] as any;

  return passwordStrength(password, options);
}

const styles = StyleSheet.create({
  requirementsContainer: {
    marginTop: 8,
  },
  strenghtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBar: {
    width: Dimensions.get('window').width / 2,
    borderRadius: 8,
    height: 6
  }
})