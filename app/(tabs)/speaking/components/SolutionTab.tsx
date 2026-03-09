import { View, Text, StyleSheet } from "react-native";
import { useSpeakingStore } from "../../../../store/useSpeakingStore";
import { solutionResults } from "../../../../data/speaking/solutions";

export default function SolutionTab() {
  const { step } = useSpeakingStore();
  const data = solutionResults[step - 1];

  if (!data) return null;

  return (
    <View style={styles.container}>
      {/* Model Answer */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Model Answer</Text>
        <Text style={styles.modelAnswer}>{data.modelAnswer}</Text>
      </View>

      {/* Structure */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Answer Structure</Text>

        {data.structure.map((item, index) => (
          <Text key={index} style={styles.bullet}>
            • {item}
          </Text>
        ))}
      </View>

      {/* Tips */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Speaking Tips</Text>

        {data.tips.map((tip, index) => (
          <Text key={index} style={styles.tip}>
            💡 {tip}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  card: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  modelAnswer: {
    fontSize: 14,
    lineHeight: 20,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 6,
  },
  tip: {
    fontSize: 14,
    marginBottom: 6,
  },
});