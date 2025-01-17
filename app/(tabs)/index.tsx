import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const onLogin = () => {
    console.log("login");
  };
  const onRegister = () => {
    console.log("register");
  };
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="login"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="password"
          placeholderTextColor="#fff"
        />
      </View>
      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.text}>Log in</Text>
      </Pressable>
      <Link href="/register" asChild>
        <Pressable style={styles.button} onPress={onRegister}>
          <Text style={styles.text}>Registration</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  inputContainer: {},
  input: {
    borderColor: "white",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },
  button: { padding: 10, backgroundColor: "violet", marginBottom: 20 },
});
