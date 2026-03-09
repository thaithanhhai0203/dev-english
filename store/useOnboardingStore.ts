import { create } from 'zustand';

type Role = "backend" | "frontend" | "qa" | "pm" | null;
type Time = "15" | "30" | "45" | "60" | null;
type Goal = "start" | "test" | null;

type OnboardingState = {
  role: Role;
  time: Time;
  goal: Goal;
  completed: boolean;

  setRole: (role: Role) => void;
  setTime: (time: Time) => void;
  setGoal: (goal: Goal) => void;
  completeOnboarding: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  role: null,
  time: null,
  goal: null,
  completed: false,

  setRole: (role) => set({ role }),
  setTime: (time) => set({ time }),
  setGoal: (goal) => set({ goal }),
  completeOnboarding: () => set({ completed: true }),
}));