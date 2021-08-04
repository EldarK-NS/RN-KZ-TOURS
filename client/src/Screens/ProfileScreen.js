import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import user from "../../assets/data/users.json";

export default function ProfileScreen() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const changePhoto = () => {
    //
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR ACCOUNT SETTINGS</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <Text style={styles.label}>Email address</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://goop-img.com/wp-content/uploads/2015/08/9-Best-Clean-Face-Oils-TLP-MANI-0100_Magdalena-Niziol-The-Licensing-Project.jpg",
          }}
          resizeMode="cover"
          style={styles.img}
        />
        <Pressable onPress={changePhoto} style={styles.buttonPhoto}>
          <Text style={{ color: "blue" }}>Choose new photo</Text>
        </Pressable>
      </View>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE SETTINGS</Text>
      </Pressable>
      <View style={styles.line} />
      <Text style={styles.title}>PASSWORD CHANGE</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Current password</Text>
        <TextInput
          value={currentPassword}
          onChangeText={(e) => setCurrentPassword(e.target.value)}
          style={styles.input}
        />

        <Text style={styles.label}>New password</Text>
        <TextInput
          value={newPassword}
          onChangeText={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
      </View>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE PASSWORD</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 7,
    fontSize: 14,
  },
  inputsContainer: {
    alignItems: "center",
    width: 250,
  },
  label: {
    alignSelf: "flex-start",
  },
  input: {
    width: 250,
    padding: 5,
    backgroundColor: "gainsboro",
    marginBottom: 10,
    borderRadius: 7,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  buttonPhoto: {
    padding: 5,
    backgroundColor: "gainsboro",
    borderRadius: 10,
    marginLeft: 15,
    alignItems: "center",
  },
  saveButton: {
    padding: 10,
    backgroundColor: "green",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 12,
  },
  line: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gainsboro",
  },
});
