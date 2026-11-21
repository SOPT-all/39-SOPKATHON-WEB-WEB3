export interface ElementaryGame {
  gameId: number;
  name: string;
  description: string;
  exampleQuestion: string;
  exampleAnswer: string;
}

export interface ElementaryQuestion {
  questionId: number;
  sentence: string;
  choices: string[];
}

export interface ElementaryRoundResult {
  totalCount: number;
  correctCount: number;
  questions: {
    questionNumber: number;
    isCorrect: boolean;
    completedSentence: string;
  }[];
}

export interface ElementaryAnswerResult {
  isCorrect: boolean;
  completedSentence: string;
  explanation: string;
}
