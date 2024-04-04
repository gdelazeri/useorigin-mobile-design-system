import { KeyboardType } from "react-native";

export type TextInputVariant = 'outlined' | 'filled' | 'standard';

export type TextInputMargin = 'none' | 'dense' | 'normal';

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  variant?: TextInputVariant;
  error?: boolean;
  helperText?: string;
  tooltipText?: string;
  multiline?: boolean;
  disabled?: boolean;
  margin?: TextInputMargin;
  maxRows?: number;
  size?: 'normal' | 'small';
  keyboardType?: KeyboardType;
}