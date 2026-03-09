import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import SkillButton from "./speaking/components/SkillButton";
import StatBox from "./speaking/components/StatBox";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>Day 7</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mục tiêu hôm nay</Text>
        <Text style={styles.minute}>30 phút</Text>

        <View style={styles.skillContainer}>
          <SkillButton title="Listening" />
          <SkillButton title="Speaking" />
          <SkillButton title="Writing" />
        </View>
      </View>

      <View style={styles.statRow}>
        <StatBox title="Day streak" value="7" />
        <StatBox title="Word learned" value="24" />
      </View>

      <Pressable
        style={styles.cta}
        onPress={() => router.push("/(tabs)/speaking")}
      >
        <Text style={styles.ctaText}>Bắt đầu học</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  dayText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  minute: {
    fontSize: 14,
    color: "#777",
    marginBottom: 16,
  },

  skillContainer: {
    gap: 10,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  cta: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});