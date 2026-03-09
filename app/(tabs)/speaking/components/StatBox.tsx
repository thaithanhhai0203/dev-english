import { View, Text, StyleSheet } from "react-native";

interface StatBoxProps {
  title: string;
  value: string | number;
}

export default function StatBox({ title, value }: StatBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginHorizontal: 6,
  },

  value: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#1E1E1E",
  },

  title: {
    fontSize: 12,
    color: "#777777",
  },
});