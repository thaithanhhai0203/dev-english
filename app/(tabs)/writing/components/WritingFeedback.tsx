import { View, StyleSheet } from "react-native";
import SegmentedTabs from "../components/SegmentedTabs";
import FeedbackCard from "../components/FeedbackCard";
import { writingFeedback } from "../../../../data/writing/writingFeedback";
import { useState } from "react";

export default function WritingFeedback() {
  const [tab, setTab] = useState(0);

  const content =
    tab === 0
      ? writingFeedback.improved
      : writingFeedback.improvements;

  return (
    <View style={styles.container}>
      <SegmentedTabs
        tabs={["Phiên bản cải tiến", "Cải tiến chính"]}
        active={tab}
        onChange={setTab}
      />

      <FeedbackCard content={content} active={tab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
});