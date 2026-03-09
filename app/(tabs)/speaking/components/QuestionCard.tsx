import { View, Text, StyleSheet } from "react-native";

interface QuestionCardProps {
  question: string;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Question</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 40,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  label: {
    fontSize: 12,
    color: "#777",
    marginBottom: 6,
  },

  question: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
    color: "#1E1E1E",
  },
});