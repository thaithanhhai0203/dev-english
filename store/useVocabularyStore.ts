import { create } from "zustand";
import { vocabularySteps } from "../data/vocabulary/vocabularyData";

interface VocabularyState {
  step: number;
  total: number;

  currentItems: typeof vocabularySteps[0]["items"];

  nextStep: () => void;
  reset: () => void;
}

export const useVocabularyStore = create<VocabularyState>((set) => ({
  step: 1,
  total: vocabularySteps.length,

  currentItems: vocabularySteps[0].items,

  nextStep: () =>
    set((state) => {
      const next = state.step + 1;

      if (next > vocabularySteps.length) return state;

      return {
        step: next,
        currentItems: vocabularySteps[next - 1].items,
      };
    }),

  reset: () =>
    set({
      step: 1,
      currentItems: vocabularySteps[0].items,
    }),
}));