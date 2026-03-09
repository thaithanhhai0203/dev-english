import { Pressable, StyleSheet, Text } from "react-native";

interface SkillButtonProps {
    title: string;
    onPress?: () => void;
    active?: boolean;
}

export default function SkillButton({title, onPress, active = false}: SkillButtonProps) {
    return (
        <Pressable style={[styles.button, active && styles.activeButton]} onPress={onPress}>
            <Text style={[styles.text, active && styles.activeText]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#E5E5E5",
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    activeButton: {
        backgroundColor: "#4CAF50",
        borderColor: "#4CAF50"
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        color: "#1E1E1E",
    },
    activeText: {
        color: "#FFFFFF"
    }
})