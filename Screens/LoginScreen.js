import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../Components/Input";

export default function LoginScreen({ onChangeScreen }) {
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
            <Input
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
                <Text
                  style={{
                    color: "#1B4371",
                  }}
                >
                  {showPassword ? "show" : "hide"}
                </Text>
              </TouchableOpacity>

              <Input
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
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: "center", marginBottom: 111 }}
              onPress={onChangeScreen}
            >
              Don't have an account? Register
            </Text>
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
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnShowPassword: {
    zIndex: 25,
    position: "absolute",
    right: 30,
    top: 30,
  },
});
