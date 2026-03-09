import { View, Text, StyleSheet } from "react-native";
import { useSpeakingStore } from "../../../../store/useSpeakingStore";
import { answerResults } from "../../../../data/speaking/answers";

export default function AnswerTab() {
  const { step } = useSpeakingStore();
  const data = answerResults[step - 1];

  if (!data) return null;

  return (
    <View style={styles.container}>
      {/* Transcript */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Answer</Text>
        <Text style={styles.transcript}>{data.transcript}</Text>
      </View>

      {/* Corrections */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Corrections</Text>

        {data.corrections.map((item, index) => (
          <View key={index} style={styles.correctionItem}>
            <Text style={styles.original}>
              ❌ {item.original}
            </Text>
            <Text style={styles.corrected}>
              ✅ {item.corrected}
            </Text>
            <Text style={styles.explanation}>
              {item.explanation}
            </Text>
          </View>
        ))}
      </View>

      {/* Fluency Comment */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Fluency Feedback</Text>
        <Text style={styles.comment}>{data.fluencyComment}</Text>
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
  transcript: {
    fontSize: 14,
    lineHeight: 20,
  },
  correctionItem: {
    marginBottom: 12,
  },
  original: {
    color: "#DC2626",
    fontWeight: "500",
  },
  corrected: {
    color: "#16A34A",
    fontWeight: "500",
    marginTop: 2,
  },
  explanation: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
  },
});