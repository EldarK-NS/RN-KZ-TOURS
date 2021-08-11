import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/auth";
import { useSelector } from "react-redux";

export default function SignUp() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState("Test");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test1234");
  const [passwordConfirm, setPasswordConfirm] = useState("test1234");

  const handleSignUp = () => {
    dispatch(signUp(name, email, password, passwordConfirm));
    navigation.navigate("HomeScreen");
  };

  const usersState = useSelector((state) => state.auth);
  console.log(usersState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOG IN</Text>
      <View style={styles.mainBlock}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="enter your name"
          onChangeText={setName}
          style={styles.input}
          value={name}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="enter your email"
          onChangeText={setEmail}
          style={styles.input}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="enter your password"
          onChangeText={setPassword}
          style={styles.input}
          value={password}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="please confirm password"
          onChangeText={setPasswordConfirm}
          style={styles.input}
          value={passwordConfirm}
        />
      </View>
      <Pressable style={styles.submitButton} onPress={handleSignUp}>
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
