import { View, Text, StyleSheet, Pressable } from "react-native";
import StepHeader from "../speaking/components/StepHeader";
import SentenceCard from "./components/SentenceCard";
import { router } from "expo-router";
import FeedbackCard from "./components/FeedbackCard";
import { useListenRepeatStore } from "../../../store/useListenRepeatStore";
import { listeningQuestions } from "../../../data/listening/listeningQuestions";

export default function Result() {
  const isSuccess = true;
  const variant = isSuccess ? "success" : "retry";
  const { step, total, nextStep, reset } = useListenRepeatStore();

  const nextQuestion = () => {
    if (step < total) {
      nextStep();
      router.replace("/(tabs)/listening");
    } else {
      reset();
      router.replace("/(tabs)/vocabulary");
    }
  }

  const retryQuestion = () => {
    router.replace("/(tabs)/listening");
  }

  return (
    <View style={styles.container}>
      <StepHeader step={step} total={total} />

      <Text style={styles.title}>Listen & Repeat</Text>
      <Text style={styles.subtitle}>
        Lắng nghe và lặp lại những câu sau
      </Text>

      <SentenceCard sentence={listeningQuestions[step - 1]?.sentence || ""} />

      <FeedbackCard variant={variant} />

      {/* ACTIONS */}
      {isSuccess ? (
        <Pressable style={styles.continueButton} onPress={nextQuestion}>
          <Text style={styles.continueText}>Tiếp tục</Text>
        </Pressable>
      ) : (
        <View style={styles.row}>
          <Pressable style={styles.retryBtn} onPress={retryQuestion}>
            <Text style={styles.retryTextBtn}>Thử lại</Text>
          </Pressable>

          <Pressable style={styles.skipBtn} onPress={nextQuestion}>
            <Text style={styles.skipText}>Bỏ qua</Text>
          </Pressable>
        </View>
      )}
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

  retryBtn: {
    flex: 1,
    backgroundColor: "#EEE",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  retryTextBtn: {
    fontWeight: "600",
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

  skipBtn: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  skipText: {
    color: "#fff",
    fontWeight: "600",
  },
});