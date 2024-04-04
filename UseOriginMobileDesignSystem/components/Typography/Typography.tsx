import React from "react";
import { Text } from 'react-native-paper';
import { TypographyProps } from "./types";
import { StyleSheet } from "react-native";

export const Typography = ({
  children,
  variant = 'h1',
  color,
  gutterBottom = false,
  align = 'auto'
}: TypographyProps) => {
  const style = {
    ...styles[variant],
    marginBottom: gutterBottom ? 8 : 0,
    color,
    textAlign: align
  }

  return (
    <Text style={style}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 96,
    fontWeight: '300',
    letterSpacing: -1.5,
  },
  h2: {
    fontSize: 60,
    fontWeight: '300',
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 48,
    fontWeight: '400',
  },
  h4: {
    fontSize: 34,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: 24,
    fontWeight: '400',
  },
  h6: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
})