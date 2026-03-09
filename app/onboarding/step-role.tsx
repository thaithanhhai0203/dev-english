import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const ROLES = [
  { key: "backend", label: "Backend Dev" },
  { key: "frontend", label: "Frontend Dev" },
  { key: "qa", label: "QA / Tester" },
  { key: "pm", label: "PM / Other role" },
];

export default function StepRole() {
  const setRole = useOnboardingStore((s) => s.setRole);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (role: string) => {
    setSelected(role);
    setRole(role as any);

    // delay nhỏ để UX mượt hơn
    setTimeout(() => {
      router.push("/onboarding/step-time");
    }, 150);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hãy nói cho tôi biết vị trí hiện tại của bạn
      </Text>

      <View style={styles.optionsContainer}>
        {ROLES.map((item) => {
          const isActive = selected === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.option,
                isActive && styles.optionActive,
              ]}
              onPress={() => handleSelect(item.key)}
            >
              <Text
                style={[
                  styles.optionText,
                  isActive && styles.optionTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 32,
    color: "#111827",
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  optionActive: {
    backgroundColor: "#22C55E",
  },
  optionText: {
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  optionTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});