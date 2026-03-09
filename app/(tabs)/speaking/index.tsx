import { ScrollView, Text, Pressable, StyleSheet } from "react-native";
import RecordButton from "./components/RecordButton";
import { useRouter } from "expo-router";
import StepHeader from "./components/StepHeader";
import QuestionCard from "./components/QuestionCard";
import { useSpeakingStore } from "../../../store/useSpeakingStore";
import { speakingQuestions } from "../../../data/speaking/questions";

export default function Speaking() {
  const router = useRouter();
  const { step, total, hasRecorded } = useSpeakingStore();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <StepHeader step={step} total={total} />
      <QuestionCard question={speakingQuestions[step - 1]} />
      <RecordButton />
      <Pressable
        style={[
          styles.continueButton,
          !hasRecorded && styles.disabledButton,
        ]}
        disabled={!hasRecorded}
        onPress={() => router.push("/(tabs)/speaking/result")}
      >
        <Text style={styles.continueText}>Tiếp tục</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
    paddingTop: 50,
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