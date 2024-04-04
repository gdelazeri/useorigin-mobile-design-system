import { TextInputProps } from "../TextInput/types";

export interface PasswordInputProps extends TextInputProps {
  showStrengthIndicator?: boolean;
  showRequirements?: boolean;
}