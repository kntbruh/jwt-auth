import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import React from "react";

export default function Register() {
  const [text, onChangeText] = React.useState("");
  const onPressFunc = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>Register</Text>
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
      <Pressable style={styles.button} onPress={onPressFunc}>
        <Text style={styles.text}>I'm pressable!</Text>
      </Pressable>
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
  button: { padding: 10, backgroundColor: "violet" },
});
