import { View, Text, StyleSheet } from "react-native";

interface Props {
  word: string;
  meaning: string;
  example: string;
}

export default function VocabularyCard({ word, meaning, example }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.word}>{word}</Text>

      <Text style={styles.meaning}>{meaning}</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.example}>"{example}"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  word: {
    fontSize: 16,
    fontWeight: "700",
  },

  meaning: {
    marginTop: 4,
    fontSize: 13,
    color: "#666",
  },

  exampleBox: {
    marginTop: 10,
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 8,
  },

  example: {
    fontSize: 13,
    color: "#333",
    fontStyle: "italic",
  },
});