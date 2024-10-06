import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
const Profile = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  console.log(name);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.conteiner}>
        <KeyboardAvoidingView behavior={"padding"}>
          <TextInput
            placeholder="Ваше ім'я"
            style={styles.textInput}
            // autoFocus={true}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Ваше прізвище"
            style={[styles.textInput, styles.changeMargin]}
            // autoFocus={true}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "",
  },
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
  changeMargin: {
    marginBottom: Platform.OS === "ios" ? 60 : 30,
  },
});
