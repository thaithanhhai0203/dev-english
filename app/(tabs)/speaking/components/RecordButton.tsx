import { Pressable, View, Text, StyleSheet } from "react-native";
import { useSpeakingStore } from "../../../../store/useSpeakingStore";
import { MaterialIcons } from "@expo/vector-icons";

export default function RecordButton() {
  const { isRecording, startRecording, stopRecording } = useSpeakingStore();
  const handlePress = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={[
          styles.button,
          isRecording && styles.recording
        ]}
         onPress={handlePress}
      >
          <MaterialIcons name='mic' size={36} color="white" style={styles.icon} />
      </Pressable>

      <Text style={styles.text}>
        {isRecording ? "Recording... Tap to stop" : "Tap to start recording"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 40,
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

  icon: {
    fontSize: 30,
    color: "#fff",
  },

  text: {
    marginTop: 16,
    fontSize: 14,
    color: "#777",
  },
});