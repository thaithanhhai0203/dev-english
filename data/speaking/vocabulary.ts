export interface VocabularyWord {
  word: string;
  phonetic: string;
  definition: string;
  example?: string;
  type: "used" | "suggested";
}

export interface VocabularyResult {
  words: VocabularyWord[];
}

export const vocabularyResults: VocabularyResult[] = [
  // STEP 1
  {
    words: [
      {
        word: "authentication",
        phonetic: "/ɔːˌθen.tɪˈkeɪ.ʃən/",
        definition: "The process of verifying user identity.",
        example: "We implemented JWT authentication.",
        type: "used",
      },
      {
        word: "implement",
        phonetic: "/ˈɪm.plɪ.ment/",
        definition: "To put a plan or system into action.",
        example: "I implemented a new validation system.",
        type: "used",
      },
      {
        word: "authorization",
        phonetic: "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
        definition: "Permission to access certain resources.",
        type: "suggested",
      },
    ],
  },

  // STEP 2
  {
    words: [
      {
        word: "incident",
        phonetic: "/ˈɪn.sɪ.dənt/",
        definition: "An unexpected event that causes disruption.",
        type: "used",
      },
      {
        word: "deploy",
        phonetic: "/dɪˈplɔɪ/",
        definition: "To release software into production.",
        type: "used",
      },
      {
        word: "root cause analysis",
        phonetic: "/ruːt kɔːz əˈnæl.ə.sɪs/",
        definition: "The process of identifying the fundamental cause of a problem.",
        type: "suggested",
      },
    ],
  },

  // STEP 3
  {
    words: [
      {
        word: "payload",
        phonetic: "/ˈpeɪ.ləʊd/",
        definition: "The data carried inside a token.",
        type: "used",
      },
      {
        word: "signature",
        phonetic: "/ˈsɪɡ.nə.tʃər/",
        definition: "A cryptographic element used to verify authenticity.",
        type: "used",
      },
      {
        word: "stateless",
        phonetic: "/ˈsteɪt.ləs/",
        definition: "Not storing session information on the server.",
        type: "suggested",
      },
    ],
  },

  // STEP 4
  {
    words: [
      {
        word: "microservices",
        phonetic: "/ˈmaɪ.krəʊˌsɜː.vɪ.sɪz/",
        definition: "An architectural style that structures an application as small services.",
        type: "used",
      },
      {
        word: "message broker",
        phonetic: "/ˈmes.ɪdʒ ˈbrəʊ.kər/",
        definition: "A system that enables services to communicate asynchronously.",
        type: "suggested",
      },
    ],
  },

  // STEP 5
  {
    words: [
      {
        word: "race condition",
        phonetic: "/reɪs kənˈdɪʃ.ən/",
        definition: "A bug that occurs when system behavior depends on execution timing.",
        type: "used",
      },
      {
        word: "synchronization",
        phonetic: "/ˌsɪŋ.krə.naɪˈzeɪ.ʃən/",
        definition: "The coordination of concurrent processes.",
        type: "suggested",
      },
    ],
  },
];