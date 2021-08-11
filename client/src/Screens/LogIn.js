import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

//TODO доделать анимацию для полей ввода, глаз, добавить сообщение об ошибке и переход на главную только по результату

export default function LogIn() {
  const navigation = useNavigation();

  //   const user = useSelector((state) => state.auth);
  //  console.log(user);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test1234");

  const handlerSubmit = () => {
    dispatch(login(email, password));
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOG IN</Text>
      <View style={styles.mainBlock}>
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
      </View>
      <Pressable style={styles.submitButton}>
        <Text
          style={{ fontWeight: "bold", color: "white" }}
          onPress={handlerSubmit}
        >
          SUBMIT
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={{ color: "red", marginTop: 50 }}>
          if you are not registered yet, please Sign up!
        </Text>
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
