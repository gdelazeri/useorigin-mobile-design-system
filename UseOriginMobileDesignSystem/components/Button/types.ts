export type ButtonVariant = "text" | "contained" | "outlined";

export interface ButtonProps {
  text: string;
  onPress: () => void;
  variant?: ButtonVariant
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}