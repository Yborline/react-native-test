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
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import startBg from "../../assets/images/background/startBg.png";
import { useState } from "react";
import { TextInput } from "react-native";
import { Link } from "expo-router";
const Register = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <ImageBackground source={startBg} style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.conteiner}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={-150}
            style={styles.boxAboiding}
            behavior={"padding"}
          >
            <View style={styles.boxForm}>
              <Text style={styles.textTitle}>Реєстрація</Text>
              <TextInput
                placeholder="Ваше ім'я"
                style={styles.textInput}
                // autoFocus={true}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Ваше прізвище"
                style={styles.textInput}
                // autoFocus={true}
                onChangeText={setPassword}
              />
              <TextInput
                placeholder="Пароль"
                style={[styles.textInput, styles.changeMargin]}
                // autoFocus={true}
                onChangeText={setLastName}
              />
              <TouchableOpacity style={styles.buttonAuth} onPress={handleLogin}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <Link href="./login" style={styles.linkText}>
                Вже є акаунт? Увійти
              </Link>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "DMSerifItal",
  },
  image: {
    flex: 1,
  },
  textTitle: {
    fontSize: 30,
    lineHeight: 40,
    fontFamily: "Rubick",
    textAlign: `center`,
    paddingBottom: 33,
    // fontFamily: "DMSerifItal",
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
  boxForm: {
    height: 549,
    width: `100%`,
    backgroundColor: `white`,
    paddingVertical: 92,
    paddingHorizontal: 16,
    paddingBottom: 45,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  changeMargin: {
    marginBottom: Platform.OS === "ios" ? 60 : 30,
  },
  boxAboiding: {
    width: `100%`,
  },
  buttonAuth: {
    backgroundColor: `#FF6C00`,
    borderRadius: 100,

    height: 51,
    display: `flex`,
    justifyContent: "center",
    alignItems: `center`,
  },
  buttonText: {
    color: `white`,
  },
  linkText: {
    textAlign: `center`,
    marginTop: 16,
    color: `#1B4371`,
  },
});
