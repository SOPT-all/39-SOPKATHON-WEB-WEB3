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
