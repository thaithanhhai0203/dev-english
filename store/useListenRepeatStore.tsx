import { create } from "zustand";

interface ListenRepeatState {
  step: number;
  total: number;
  isListening: boolean;
  isRecording: boolean;
  finished: boolean;

  playAudio: () => void;
  startRecord: () => void;
  reset: () => void;
  nextStep: () => void;
}

export const useListenRepeatStore = create<ListenRepeatState>((set, get) => ({
  step: 1,
  total: 5,
  isListening: false,
  isRecording: false,
  finished: false,

  playAudio: () => {
    const { isRecording } = get();
    if (isRecording) return;

    set({ isListening: true });

    setTimeout(() => {
      set({ isListening: false });
    }, 2000);
  },

  startRecord: () => {
    const { isListening } = get();
    if (isListening) return;

    set({ isRecording: true });

    setTimeout(() => {
      set({
        isRecording: false,
        finished: true,
      });
    }, 3000);
  },

  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
      isListening: false,
      isRecording: false,
      finished: false,
    })),


  reset: () => {
    set({
      step: 1,
      isListening: false,
      isRecording: false,
      finished: false,
    });
  },
}));