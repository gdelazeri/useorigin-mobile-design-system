import React from "react";
import { Button as RNPButton } from 'react-native-paper';
import { ButtonProps } from "./types";

export const Button = ({
  text,
  onPress,
  variant = 'text',
  disabled = false,
  loading = false,
  icon,
}: ButtonProps) => {
  return (
    <RNPButton
      mode={variant}
      onPress={onPress}
      testID='button'
      disabled={disabled || loading}
      icon={icon}
      contentStyle={{ flexDirection: 'row-reverse' }}
      loading={loading}
    >
      {text}
    </RNPButton>
  );
};
