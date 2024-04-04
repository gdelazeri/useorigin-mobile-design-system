import React from "react";
import { Tooltip as RNPTooltip } from 'react-native-paper';
import { TooltipProps } from "./types";

export const Tooltip = ({
  children,
  title,
}: TooltipProps) => {
  return (
    <RNPTooltip title={title}>
      {children}
    </RNPTooltip>
  );
};
