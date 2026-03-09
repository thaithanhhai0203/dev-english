import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import StepHeader from "../speaking/components/StepHeader";
import VocabularyCard from "./components/VocabularyCard";
import { useVocabularyStore } from "../../../store/useVocabularyStore";
import { router } from "expo-router";

export default function Vocabulary() {
    const { step, total, currentItems, nextStep, reset } = useVocabularyStore();

    const handleContinue = () => {
        if (step < total) {
            nextStep();
            router.replace("/(tabs)/vocabulary");
        } else {
            reset();
            router.replace("/(tabs)/writing");
        }
    }

    return (
        <View style={styles.container}>
            <StepHeader step={step} total={total} />

            <Text style={styles.title}>IT Vocabulary</Text>

            <Text style={styles.subtitle}>
                Học từ vựng qua ngữ cảnh công việc thực tế
            </Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {currentItems.map((item, index) => (
                    <VocabularyCard
                        key={index}
                        word={item.word}
                        meaning={item.meaning}
                        example={item.example}
                    />
                ))}
            </ScrollView>

            <Pressable style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Tiếp tục</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F7F7F7",
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 10,
    },

    subtitle: {
        textAlign: "center",
        color: "#666",
        marginBottom: 20,
    },

    button: {
        marginTop: 10,
        backgroundColor: "#000",
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});