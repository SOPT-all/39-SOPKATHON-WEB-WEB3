export interface SchoolGame {
  gameId: number;
  name: string;
  description: string;
  exampleQuestion: string;
  exampleAnswer: string;
}

export interface SchoolQuestion {
  questionId: number;
  sentence: string;
  choices: string[];
}

export interface SchoolRoundResult {
  totalCount: number;
  correctCount: number;
  questions: {
    questionNumber: number;
    isCorrect: boolean;
    completedSentence: string;
  }[];
}

export interface SchoolAnswerResult {
  isCorrect: boolean;
  completedSentence: string;
  explanation: string;
}
