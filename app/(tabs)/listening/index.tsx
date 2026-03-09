import { View, Text, StyleSheet, Pressable } from "react-native";
import { useListenRepeatStore } from "../../../store/useListenRepeatStore";
import StepHeader from "../speaking/components/StepHeader";
import SentenceCard from "./components/SentenceCard";
import { router } from "expo-router";
import ListeningControls from "./components/ListeningControls";
import { listeningQuestions } from "../../../data/listening/listeningQuestions";

export default function Listen() {
  const {
    step,
    total,
    isListening,
    isRecording,
    playAudio,
    startRecord,
  } = useListenRepeatStore();

  return (
    <View style={styles.container}>
      <StepHeader step={step} total={total} />

      <Text style={styles.title}>Listen & Repeat</Text>
      <Text style={styles.subtitle}>
        Lắng nghe và lặp lại những câu sau
      </Text>

      <SentenceCard sentence={listeningQuestions[step - 1]?.sentence || ""} />

      <ListeningControls
        isListening={isListening}
        isRecording={isRecording}
        onListen={playAudio}
        onRecord={startRecord}
      />

      <Pressable
        style={[
          styles.continueButton
        ]}
        onPress={() => router.push("/(tabs)/listening/result")}
      >
        <Text style={styles.continueText}>Tiếp tục</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 4,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },

  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  disabledButton: {
    backgroundColor: "#D1D5DB",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  continueText: {
    color: "#fff",
    fontWeight: "600",
  },
});