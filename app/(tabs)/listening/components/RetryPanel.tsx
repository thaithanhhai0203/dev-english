import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function RetryPanel({ onRetry, onSkip }: any) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="refresh" size={28} color="#FF9800" />

      <Text style={styles.title}>Thử lại</Text>
      <Text style={styles.desc}>
        Tập trung vào phát âm
      </Text>

      <View style={styles.row}>
        <Pressable style={styles.retry} onPress={onRetry}>
          <Text>Thử lại</Text>
        </Pressable>

        <Pressable style={styles.skip} onPress={onSkip}>
          <Text style={{ color: "#fff" }}>Bỏ qua</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3E0",
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
  },

  title: {
    fontWeight: "600",
    marginTop: 6,
  },

  desc: {
    fontSize: 13,
    color: "#666",
  },

  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  retry: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#EEE",
  },

  skip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: "#000",
  },
});