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
  iconPosition = 'left'
}: ButtonProps) => {
  return (
    <RNPButton
      mode={variant}
      onPress={onPress}
      testID='button'
      disabled={disabled || loading}
      icon={icon}
      contentStyle={{ flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse' }}
      loading={loading}
    >
      {text}
    </RNPButton>
  );
};
