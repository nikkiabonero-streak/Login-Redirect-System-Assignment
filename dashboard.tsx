import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <Text style={styles.info}>Welcome back,</Text>
      <Text style={styles.email}>{email || "Guest"}</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => router.push("/profile")}>
        <Text style={styles.btnText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]} onPress={() => router.replace("/login")}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#70deded2" },
  header: { fontSize: 28, fontWeight: "bold", color: "#000" },
  info: { fontSize: 16, color: "#000000", marginTop: 10 },
  email: { fontSize: 22, fontWeight: "bold", color: "#ffffff", marginBottom: 30 },
  btn: { backgroundColor: "#75e356f9", padding: 15, borderRadius: 8, width: "70%", alignItems: "center", marginBottom: 10 },
  btnText: { color: "#fff", fontWeight: "bold" }
});