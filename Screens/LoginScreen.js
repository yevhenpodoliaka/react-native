import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = () => {
    console.log(`
    "email "${email},
    "password " ${password}`);

    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/bg-img.jpg")}
      >
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
          <View style={styles.form}>
           
                      <Text style={styles.formTitle}>Login</Text>
                      
            <TextInput
              style={styles.input}
              placeholder="email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnShowPassword}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.btnShowPasswordTitle}>
                  {showPassword ? "show" : "hide"}
                </Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry={showPassword}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={onSubmit}
            >
              <Text style={styles.btnTitle}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formTitle: {
    fontFamily: "Test",
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#f6f6f6",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 8,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
  btnShowPasswordTitle: {
    color: "#1B4371",
  },
  btnShowPassword: {
    zIndex: 25,
    position: "absolute",
    right: 30,
    top: 30,
  },
});
