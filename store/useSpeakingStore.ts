import { create } from "zustand";

interface SpeakingState {
  step: number;
  total: number;

  isRecording: boolean;
  hasRecorded: boolean;

  startRecording: () => void;
  stopRecording: () => void;
  resetRecording: () => void;

  nextStep: () => void;
  reset: () => void;
}

export const useSpeakingStore = create<SpeakingState>((set) => ({
  step: 1,
  total: 5,

  isRecording: false,
  hasRecorded: false,

  startRecording: () =>
    set({
      isRecording: true,
    }),

  stopRecording: () =>
    set({
      isRecording: false,
      hasRecorded: true,
    }),

  resetRecording: () =>
    set({
      isRecording: false,
      hasRecorded: false,
    }),

  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
      hasRecorded: false,
    })),

  reset: () =>
    set({
      step: 1,
      hasRecorded: false,
      isRecording: false,
    }),
}));