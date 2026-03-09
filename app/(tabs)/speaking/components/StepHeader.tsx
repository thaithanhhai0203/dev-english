import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

interface StepHeaderProps {
  step: number;
  total: number;
}

export default function StepHeader({ step, total }: StepHeaderProps) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const percent = step / total;

    Animated.timing(progress, {
      toValue: percent,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const widthInterpolate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.stepText}>
          Step {step} of {total}
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressFill,
            { width: widthInterpolate },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  stepText: {
    fontSize: 14,
    fontWeight: "600",
  },

  progressBackground: {
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: 8,
    backgroundColor: "#4CAF50",
  },
});