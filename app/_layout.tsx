import { Stack } from "expo-router";
import { useOnboardingStore } from "../store/useOnboardingStore";

export default function RootLayout() {
  const completed = useOnboardingStore((s) => s.completed);
   return (
    <Stack screenOptions={{ headerShown: false }}>
      {completed ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="onboarding/index" />
      )}
    </Stack>
  );
}