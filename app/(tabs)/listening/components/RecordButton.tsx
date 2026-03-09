import { Pressable, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  recording?: boolean;
}

export default function RecordButton({ onPress, recording }: Props) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[
          styles.button,
          recording && styles.recording
        ]}
        onPress={onPress}
      >
        <MaterialIcons name="mic" size={36} color="#fff" />
      </Pressable>

      <Text style={styles.text}>
        {recording
          ? "Recording... Tap to stop"
          : "Tap to start recording"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },

  button: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  recording: {
    backgroundColor: "#E53935",
  },

  text: {
    marginTop: 12,
    fontSize: 13,
    color: "#777",
  },
});