export interface AnswerFeedbackItem {
  original: string;
  corrected: string;
  explanation: string;
}

export interface AnswerResult {
  transcript: string;
  corrections: AnswerFeedbackItem[];
  fluencyComment: string;
}

export const answerResults: AnswerResult[] = [
  // STEP 1
  {
    transcript:
      "Yesterday I work on the API for user authentication and I implement JWT token for security.",

    corrections: [
      {
        original: "I work",
        corrected: "I worked",
        explanation: "Use past tense when describing completed actions.",
      },
      {
        original: "implement JWT token",
        corrected: "implemented JWT tokens",
        explanation: "Use past tense and plural form here.",
      },
    ],

    fluencyComment:
      "Your answer is clear but contains small tense mistakes. Try to slow down and focus on verb forms.",
  },

  // STEP 2
  {
    transcript:
      "When error happen in production I check log and fix it quickly.",

    corrections: [
      {
        original: "error happen",
        corrected: "errors happen",
        explanation: "Use plural noun and correct verb agreement.",
      },
      {
        original: "check log",
        corrected: "check the logs",
        explanation: "Use article 'the' and plural form.",
      },
    ],

    fluencyComment:
      "Good structure but grammar agreement needs improvement.",
  },

  // STEP 3
  {
    transcript:
      "JWT is use for authentication and send secure data between client and server.",

    corrections: [
      {
        original: "is use",
        corrected: "is used",
        explanation: "Passive voice requires past participle.",
      },
      {
        original: "send secure data",
        corrected: "sending secure data",
        explanation: "Gerund form fits better in this structure.",
      },
    ],

    fluencyComment:
      "You understand the concept but grammar accuracy needs polishing.",
  },

  // STEP 4
  {
    transcript:
      "Microservices communicate by REST API or message queue like Kafka.",

    corrections: [
      {
        original: "by REST API",
        corrected: "through REST APIs",
        explanation: "Use 'through' and plural form.",
      },
    ],

    fluencyComment:
      "Good vocabulary usage. Just minor preposition correction needed.",
  },

  // STEP 5
  {
    transcript:
      "The bug happen because two async function update database same time.",

    corrections: [
      {
        original: "bug happen",
        corrected: "bug happened",
        explanation: "Past tense needed.",
      },
      {
        original: "same time",
        corrected: "at the same time",
        explanation: "Use correct prepositional phrase.",
      },
    ],

    fluencyComment:
      "Nice explanation of technical issue. Work on verb tense consistency.",
  },
];