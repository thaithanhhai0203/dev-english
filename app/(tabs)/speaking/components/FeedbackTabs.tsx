import { View, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";
import AnswerTab from "./AnswerTab";
import SolutionTab from "./SolutionTab";
import VocabularyTab from "./VocabularyTab";

type TabType = "answer" | "solution" | "vocab";

export default function FeedbackTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("answer");

  return (
    <View>
      <View style={styles.tabRow}>
        <TabButton
          label="Trả lời"
          active={activeTab === "answer"}
          onPress={() => setActiveTab("answer")}
        />
        <TabButton
          label="Đáp án"
          active={activeTab === "solution"}
          onPress={() => setActiveTab("solution")}
        />
        <TabButton
          label="Từ vựng"
          active={activeTab === "vocab"}
          onPress={() => setActiveTab("vocab")}
        />
      </View>

      <View style={styles.content}>
        {activeTab === "answer" && <AnswerTab />}
        {activeTab === "solution" && <SolutionTab />}
        {activeTab === "vocab" && <VocabularyTab />}
      </View>
    </View>
  );
}

function TabButton({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[styles.tabButton, active && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, active && styles.activeText]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#FFFFFF",
  },

  tabText: {
    fontSize: 13,
    color: "#777",
    fontWeight: "500",
  },

  activeText: {
    color: "#000",
    fontWeight: "600",
  },

  content: {
    marginTop: 10,
  },
});