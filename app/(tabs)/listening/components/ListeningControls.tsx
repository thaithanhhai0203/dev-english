import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  isListening: boolean;
  isRecording: boolean;
  onListen: () => void;
  onRecord: () => void;
}

export default function ListeningControls({
  isListening,
  isRecording,
  onListen,
  onRecord,
}: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          isListening && styles.active,
          isRecording && styles.disabled
        ]}
        disabled={isRecording}
        onPress={onListen}
      >
        <MaterialIcons name="volume-up" size={30} color="#fff" />
      </Pressable>

      <Pressable
        style={[
          styles.button,
          isRecording && styles.recording,
          isListening && styles.disabled
        ]}
        disabled={isListening}
        onPress={onRecord}
      >
        <MaterialIcons name="mic" size={30} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 30,
  },

  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  active: {
    backgroundColor: "#E53935",
  },

  recording: {
    backgroundColor: "#E53935",
  },

  disabled: {
    opacity: 0.3,
  },
});