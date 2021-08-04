import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOG IN</Text>
      <View style={styles.mainBlock}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="enter your name"
          onChangeText={(e) => setName(e.target.value)}
          style={styles.input}
          value={name}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="enter your email"
          onChangeText={(e) => setEmail(e.target.value)}
          style={styles.input}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="enter your password"
          onChangeText={(e) => setPassword(e.target.value)}
          style={styles.input}
          value={password}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="please confirm password"
          onChangeText={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          value={confirmPassword}
        />
      </View>
      <Pressable
        style={styles.submitButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>SIGN UP</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 20,
    fontSize: 18,
  },
  mainBlock: {},
  label: {},
  input: {
    width: 300,
    padding: 10,
    backgroundColor: "gainsboro",
    borderRadius: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "orange",
    width: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
