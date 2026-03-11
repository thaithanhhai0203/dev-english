import { create } from "zustand";
import { writingScenarios } from "../data/writing/writingScenarios";

interface WritingState {
  step: number;
  total: number;

  scenario: string;
  answer: string;

  setScenario: (s: string) => void;
  setAnswer: (text: string) => void;

  nextStep: () => void;
  reset: () => void;
}

export const useWritingStore = create<WritingState>((set) => ({
  step: 1,
  total: 3,

  scenario: writingScenarios[0].value,
  answer: "",

  setScenario: (scenario) => set({ scenario }),

  setAnswer: (answer) => set({ answer }),

  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),

  reset: () =>
    set({
      step: 1,
      scenario: writingScenarios[0].value,
      answer: "",
    }),
}));
