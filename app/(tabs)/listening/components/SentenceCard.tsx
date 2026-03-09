import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  sentence: string;
}

export default function SentenceCard({ sentence }: Props) {
  return (
    <View style={styles.card}>
      <MaterialIcons name="record-voice-over" size={24} color="#4CAF50" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>{sentence}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
    height: 200
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingRight: 6,
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});