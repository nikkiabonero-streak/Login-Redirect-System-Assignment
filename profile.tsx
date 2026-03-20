import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.text}>Thank You for visiting.</Text>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.btnText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#49ffbcdc" },
  title: { fontSize: 28, fontWeight: "bold", color: "#000" },
  text: { fontSize: 16, color: "#050303", marginVertical: 20 },
  backBtn: { backgroundColor: "#000000b9", padding: 15, borderRadius: 8, width: "60%", alignItems: "center" },
  btnText: { color: "#fff", fontWeight: "bold" }
});