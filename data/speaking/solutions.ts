export interface SolutionResult {
  modelAnswer: string;
  structure: string[];
  tips: string[];
}

export const solutionResults: SolutionResult[] = [
  // STEP 1
  {
    modelAnswer:
      "Yesterday, I worked on improving our authentication system. Specifically, I implemented JWT-based authentication to enhance security and refactored the validation logic to improve performance.",

    structure: [
      "Introduce task context",
      "Explain specific action taken",
      "Describe impact/result",
    ],

    tips: [
      "Use past tense consistently.",
      "Add specific technical terms for higher band.",
      "Explain the impact of your work.",
    ],
  },

  // STEP 2
  {
    modelAnswer:
      "When errors occur in production, I first analyze the logs to identify the root cause. After reproducing the issue locally, I implement a fix and deploy a hotfix following our incident response process.",

    structure: [
      "Describe situation",
      "Explain step-by-step process",
      "Mention professional workflow",
    ],

    tips: [
      "Use conditional sentences.",
      "Show structured thinking.",
      "Mention tools for higher credibility.",
    ],
  },

  // STEP 3
  {
    modelAnswer:
      "JWT, or JSON Web Token, is a compact token format used for secure authentication. It consists of a header, payload, and signature, allowing stateless verification between client and server.",

    structure: [
      "Give definition",
      "Explain components",
      "Mention real-world use",
    ],

    tips: [
      "Define technical terms clearly.",
      "Use precise vocabulary.",
      "Avoid overly simple sentences.",
    ],
  },

  // STEP 4
  {
    modelAnswer:
      "Microservices typically communicate through REST APIs or asynchronously using message brokers like Kafka. This approach helps decouple services and improves system scalability.",

    structure: [
      "List communication methods",
      "Give example tools",
      "Explain benefits",
    ],

    tips: [
      "Compare different approaches.",
      "Use linking words like 'typically', 'however', 'in contrast'.",
    ],
  },

  // STEP 5
  {
    modelAnswer:
      "Recently, I resolved a race condition caused by concurrent database updates. After identifying the issue, I implemented proper synchronization to ensure thread safety and data consistency.",

    structure: [
      "Describe the problem",
      "Explain debugging process",
      "Describe solution and impact",
    ],

    tips: [
      "Use storytelling structure.",
      "Highlight problem-solving skills.",
      "Mention technical terms naturally.",
    ],
  },
];