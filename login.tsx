import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    router.replace({ pathname: "/dashboard", params: { email: email } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 40, backgroundColor: "#FFFFFF" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 40, textAlign: "center", color: "#fffefe" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 15, borderRadius: 10, marginBottom: 20, color: "#000000", backgroundColor: "#fff" },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#000000", fontWeight: "bold", fontSize: 16 }
});