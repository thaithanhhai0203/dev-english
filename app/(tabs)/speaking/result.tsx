import { ScrollView, StyleSheet, Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import StepHeader from "./components/StepHeader";
import QuestionCard from "./components/QuestionCard";
import FeedbackTabs from "./components/FeedbackTabs";
import { useSpeakingStore } from "../../../store/useSpeakingStore";
import { speakingQuestions } from "../../../data/speaking/questions";

export default function Result() {
    const router = useRouter();
    const { step, total, nextStep, reset } = useSpeakingStore();

    const handleContinue = () => {
        if (step < total) {
            nextStep();
            router.replace("/(tabs)/speaking");
        } else {
            reset();
            router.replace("/(tabs)/listening");
        }
    }

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
        >
            <StepHeader step={step} total={total} />
            <QuestionCard question={speakingQuestions[step - 1]} />
            <FeedbackTabs />

            <Pressable
                style={styles.continueBtn}
                onPress={handleContinue}
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

    continueBtn: {
        backgroundColor: "#000",
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