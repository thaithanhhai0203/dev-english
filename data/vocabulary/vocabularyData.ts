export interface VocabularyItem {
  word: string;
  meaning: string;
  example: string;
}

export interface VocabularyStep {
  id: number;
  items: VocabularyItem[];
}

export const vocabularySteps: VocabularyStep[] = [
  {
    id: 1,
    items: [
      {
        word: "blocker",
        meaning: "something that prevents progress",
        example: "This issue is a blocker for release",
      },
      {
        word: "refactor",
        meaning: "Restructure code without changing its behavior",
        example: "We should refactor this code for better readability",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        word: "deploy",
        meaning: "Release software to a server or environment",
        example: "Let's deploy the new version to production",
      },
      {
        word: "standup",
        meaning: "A short daily team meeting",
        example: "Don't forget our daily standup at 10 AM",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        word: "repository",
        meaning: "A place where code is stored",
        example: "Push your changes to the repository",
      },
      {
        word: "commit",
        meaning: "Save changes to version control",
        example: "Make sure to commit your code frequently",
      },
    ],
  },
  {
    id: 4,
    items: [
      {
        word: "merge",
        meaning: "Combine code changes from different branches",
        example: "Let's merge the feature branch into main",
      },
      {
        word: "pipeline",
        meaning: "Automated process to build and test software",
        example: "The CI pipeline failed again",
      },
    ],
  },
  {
    id: 5,
    items: [
      {
        word: "rollback",
        meaning: "Revert to a previous version of software",
        example: "We need to rollback the last deployment",
      },
      {
        word: "hotfix",
        meaning: "A quick fix for a critical bug",
        example: "We released a hotfix for the login issue",
      },
    ],
  },
];