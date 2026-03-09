import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const TIMES = [
  { key: "15", label: "15 phút/ngày" },
  { key: "30", label: "30 phút/ngày" },
  { key: "45", label: "45 phút/ngày" },
  { key: "60", label: "60 phút/ngày" },
];

export default function StepTime() {
  const setTime = useOnboardingStore((s) => s.setTime);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (time: string) => {
    setSelected(time);
    setTime(time as any);

    setTimeout(() => {
      router.push("/onboarding/step-goal");
    }, 150);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Thời gian học tập hàng ngày của bạn là:
      </Text>

      <View style={styles.optionsContainer}>
        {TIMES.map((item) => {
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