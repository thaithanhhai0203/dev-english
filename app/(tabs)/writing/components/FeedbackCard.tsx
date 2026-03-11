import { ScrollView, Text, StyleSheet } from "react-native";

interface FeedbackCardProps {
    content: string;
    active: number;
}

export default function FeedbackCard({ content, active }: FeedbackCardProps) {
  return (
    <ScrollView style={{...styles.card, backgroundColor: active === 0 ? "#F8FDF9" : "#EFEBE6"}}>
      <Text style={styles.text}>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F1F3F2",
    borderRadius: 16,
    padding: 20,
    height: 320,
  },

  text: {
    fontSize: 16,
    lineHeight: 26,
  },
});