import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";
interface IInput {
  placeholder: string;
  onChange: (text: string) => void;
  type: "username" | "emailAddress";
}

const Input: FC<IInput> = ({ placeholder, onChange, type }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChange}
      textContentType={type}
      autoComplete="off"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    margin: 0,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
});
