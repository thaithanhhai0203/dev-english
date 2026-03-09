import { StyleSheet, Text, View } from "react-native";
import { useSpeakingStore } from "../../../../store/useSpeakingStore";
import { vocabularyResults } from "../../../../data/speaking/vocabulary";

export default function VocabularyTab() {
    const { step } = useSpeakingStore();
    const vocabData = vocabularyResults[step - 1];

    return (
        vocabData.words.map((item, index) => (
            <VocabularyCard
                key={index}
                word={item.word}
                phonetic={item.phonetic}
                definition={item.definition}
            />
        ))
    );
}

interface Props {
    word: string;
    phonetic: string;
    definition: string;
}

export const VocabularyCard = ({
    word,
    phonetic,
    definition,
}: Props) => {
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