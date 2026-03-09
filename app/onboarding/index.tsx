import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function OnboardingIntro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        English for your IT career 🚀
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding/step-role")}
      >
        <Text style={styles.buttonText}>Đi thôi nào</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#16A34A", // green-600
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#22C55E", // green-500
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 999,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});