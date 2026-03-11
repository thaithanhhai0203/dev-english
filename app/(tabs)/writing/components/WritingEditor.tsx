import { View, TextInput, StyleSheet } from "react-native";
import { useWritingStore } from "../../../../store/useWritingStore";

export default function WritingEditor() {
  const { answer, setAnswer } = useWritingStore();

  return (
    <View>
      <TextInput
        style={styles.input}
        multiline
        value={answer}
        onChangeText={setAnswer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    height: 200,
    padding: 12,
    textAlignVertical: "top",
  },
});