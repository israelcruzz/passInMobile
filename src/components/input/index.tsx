import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, View, TextInputProps, StyleSheet } from "react-native";

interface InputProps {
  children: ReactNode;
}

function Input({ children }: InputProps) {
  return <View style={styles.input}>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.field}
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#4ade80",
    borderRadius: 8,
  },
  field: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
  },
});
