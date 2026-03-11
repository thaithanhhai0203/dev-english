import { View, Text, StyleSheet, Pressable } from "react-native";
import WritingFeedback from "./components/WritingFeedback";
import { router } from "expo-router";

export default function Result() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing for work</Text>

      <Text style={styles.subtitle}>Viết tin nhắn rõ ràng và chuyên nghiệp</Text>

      <WritingFeedback/>

      <Pressable style={styles.button} onPress={() => router.replace('/great-work')}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },

  label: {
    fontWeight: "600",
    marginBottom: 6,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});