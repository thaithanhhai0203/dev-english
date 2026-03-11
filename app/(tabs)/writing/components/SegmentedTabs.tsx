import { View, Text, Pressable, StyleSheet } from "react-native";

interface SegmentedTabsProps {
    tabs: string[];
    active: number;
    onChange: (index: number) => void;
}

export default function SegmentedTabs({ tabs, active, onChange }: SegmentedTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <Pressable
          key={index}
          onPress={() => onChange(index)}
          style={[
            styles.tab,
            active === index && styles.activeTab
          ]}
        >
          <Text
            style={[
              styles.text,
              active === index && styles.activeText
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: "#fff",
  },

  text: {
    color: "#555",
  },

  activeText: {
    fontWeight: "600",
    color: "#000",
  },
});