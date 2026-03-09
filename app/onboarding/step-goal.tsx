import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const GOALS = [
  {
    key: "start",
    title: "Bắt đầu từ đầu",
    description: "Bắt đầu trải nghiệm học tập cùng chúng tôi ngay bây giờ.",
  },
  {
    key: "test",
    title: "Học đúng trình độ",
    description: "Làm bài kiểm tra ngắn để xác định trình độ hiện tại.",
  },
];

export default function StepGoal() {
  const setGoal = useOnboardingStore((s) => s.setGoal);
  const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);
  const [selected, setSelected] = useState<string | null>(null);

  const handleFinish = (goal: string) => {
    setSelected(goal);
    setGoal(goal as any);

    setTimeout(() => {
      completeOnboarding();
      router.replace("/(tabs)");
    }, 200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bạn muốn bắt đầu học cùng tôi thế nào?
      </Text>

      <View style={styles.optionsContainer}>
        {GOALS.map((item) => {
          const isActive = selected === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.card,
                isActive && styles.cardActive,
              ]}
              onPress={() => handleFinish(item.key)}
            >
              <Text
                style={[
                  styles.cardTitle,
                  isActive && styles.cardTitleActive,
                ]}
              >
                {item.title}
              </Text>

              <Text
                style={[
                  styles.cardDescription,
                  isActive && styles.cardDescriptionActive,
                ]}
              >
                {item.description}
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
    gap: 20,
  },
  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 20,
  },
  cardActive: {
    backgroundColor: "#22C55E",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  cardTitleActive: {
    color: "#FFFFFF",
  },
  cardDescription: {
    fontSize: 14,
    color: "#6B7280",
  },
  cardDescriptionActive: {
    color: "#FFFFFF",
  },
});