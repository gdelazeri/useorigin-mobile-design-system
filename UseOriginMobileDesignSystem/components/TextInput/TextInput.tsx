import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon, TextInput as RNPTextInput, useTheme } from 'react-native-paper';
import { TextInputProps } from "./types";
import { Tooltip } from "../Tooltip/Tooltip";

export const TextInput = ({
  label,
  placeholder,
  onChange,
  error = false,
  helperText,
  tooltipText,
  variant = 'outlined',
  multiline = false,
  disabled = false,
  margin = 'none',
  maxRows,
  size = 'normal',
  keyboardType = 'default'
}: TextInputProps) => {
  const theme = useTheme();
  const [text, setText] = React.useState('')  // uncontrolled component - to be tested on storybook

  const hasHelperText = typeof helperText === 'string' && helperText.length > 0;
  const hasTooltipText = !!tooltipText;

  const onChangeText = (text: string) => {
    setText(text);
    onChange && onChange(text);
  }

  const textInputStyle = getCustomTextInputStyle({
    variant, multiline, maxRows, margin
  })

  const helperTextStyle = {
    ...styles.helperText,
    color: error ? theme.colors.error : '#0009',
  }

  return (
    <>
      {hasTooltipText && <View style={styles.tooltipContainer}>
        <Tooltip title={tooltipText}>
          <View style={styles.iconContainer}>
            <Icon source="information-outline" size={18} color="#333" />
          </View>
        </Tooltip>
      </View>}
      <RNPTextInput
        label={label}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        onChangeText={onChangeText}
        value={text}
        mode={variant !== 'outlined' ? 'flat' : 'outlined'}
        error={error}
        disabled={disabled}
        multiline={multiline}
        style={{ ...textInputStyle }}
        dense={size === 'small'}
        keyboardType={keyboardType}
      />
      {hasHelperText && <Text style={{ ...helperTextStyle }}>{helperText}</Text>}
    </>
  );
};

const getCustomTextInputStyle = ({ variant, multiline, maxRows, margin }: TextInputProps) => {
  const textInputStyle: any = { }

  if (variant === 'standard') {
    textInputStyle.backgroundColor = 'transparent';
  }
  if (multiline && maxRows) {
    textInputStyle.height = (maxRows + 3) * 16;
  }
  if (margin === 'none') {
    textInputStyle.marginTop = -8;
  } else {
    textInputStyle.marginTop = margin === 'dense' ? 8 : 16;
    textInputStyle.marginBottom = margin === 'dense' ? 4 : 8;
  }

  return textInputStyle;
}

const styles = StyleSheet.create({
  helperText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 3,
    marginRight: 14,
    marginBottom: 0,
    marginLeft: 14
  },
  tooltipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    paddingVertical: 8,
  }
})