export interface ListeningQuestion {
  id: number;
  sentence: string;
  hint?: string;
  audio?: string;
}

export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 1,
    sentence: "Let's deploy this to production",
    hint: "deploy / production",
    audio: "audio/deploy-production.mp3",
  },
  {
    id: 2,
    sentence: "I'll create a pull request for review",
    hint: "pull request",
    audio: "audio/pull-request.mp3",
  },
  {
    id: 3,
    sentence: "Can you check the latest commit",
    hint: "latest commit",
    audio: "audio/latest-commit.mp3",
  },
  {
    id: 4,
    sentence: "We need to fix this bug before release",
    hint: "fix bug",
    audio: "audio/fix-bug.mp3",
  },
  {
    id: 5,
    sentence: "The CI pipeline failed again",
    hint: "CI pipeline",
    audio: "audio/ci-pipeline.mp3",
  },
];