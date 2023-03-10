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

export default function RegistrationScreen({ onChangeScreen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = () => {
    console.log(`
    "name" ${name}, 
    "email "${email},
    "password " ${password}`);

    setName("");
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
            <View style={styles.avatar}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnAddAvatar}
                onPress={() => console.log("click")}
              >
                <Text style={styles.iconAddAvatar}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Registration</Text>
            <Input
              placeholder="name"
              value={name}
              onChangeText={(value) => setName(value)}
            />
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
                Register
              </Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: "center", marginBottom: 45 }}
              onPress={onChangeScreen}
            >
              Already have an account? Sign in
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
    position: "absolute",
    alignSelf: "center",
    top: -60,
  },
  btnAddAvatar: {
    position: "absolute",
    left: 107,
    top: 81,
    width: 25,
    height: 25,
    borderRadius: 90,
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  iconAddAvatar: {
    color: "#FF6C00",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "300",
    lineHeight: 26,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: 92,
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
