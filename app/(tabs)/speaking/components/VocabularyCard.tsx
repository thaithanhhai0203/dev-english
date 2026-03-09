import { View, Text, StyleSheet } from "react-native";

interface Props {
    word: string;
    phonetic: string;
    definition: string;
}

export default function VocabularyCard({
    word,
    phonetic,
    definition,
}: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.phonetic}>{phonetic}</Text>
            <Text style={styles.definition}>{definition}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F3F4F6",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
    },
    word: {
        fontSize: 16,
        fontWeight: "600",
    },
    phonetic: {
        fontSize: 14,
        color: "#6B7280",
        marginVertical: 4,
    },
    definition: {
        fontSize: 14,
    },
});