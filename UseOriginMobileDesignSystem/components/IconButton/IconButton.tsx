import React from "react";
import { IconButton as RNPIconButton } from 'react-native-paper';
import { IconButtonProps } from "./types";

export const IconButton = ({
  icon,
  onPress,
  color,
}: IconButtonProps) => {
  return (
    <RNPIconButton
      icon={icon}
      iconColor={color}
      onPress={onPress}
      testID="icon-button"
   />
  );
};
