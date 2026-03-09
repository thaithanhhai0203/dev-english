import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  variant: "success" | "retry";
}

export default function FeedbackCard({ variant }: Props) {
  const isSuccess = variant === "success";

  return (
    <View
      style={[
        styles.container,
        isSuccess ? styles.success : styles.retry
      ]}
    >
      <MaterialIcons
        name={isSuccess ? "thumb-up" : "autorenew"}
        size={32}
        color={isSuccess ? "#4CAF50" : "#7A6A3A"}
      />

      <Text
        style={[
          styles.title,
          isSuccess ? styles.successText : styles.retryText
        ]}
      >
        {isSuccess ? "Good job" : "Thử lại"}
      </Text>

      {!isSuccess && (
        <Text style={styles.subtitle}>
          Tập trung vào phát âm
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  success: {
    backgroundColor: "#E8F5E9",
  },

  retry: {
    backgroundColor: "#F3EEDC",
  },

  title: {
    marginTop: 6,
    fontWeight: "600",
    fontSize: 16,
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
  },

  successText: {
    color: "#4CAF50",
  },

  retryText: {
    color: "#7A6A3A",
  },
});