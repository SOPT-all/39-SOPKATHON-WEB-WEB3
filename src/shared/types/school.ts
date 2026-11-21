// 서버 응답 (GET /school/games)
export interface SchoolGame {
  gameId: number;
  name: string;
  rules: string;
}

export interface SchoolGameList {
  games: SchoolGame[];
}

// 서버가 주지 않는 화면 문구
export interface SchoolGameMeta {
  iconSrc: string;
  summary: string; // 리스트 카드 설명
  description: string; // 인트로 설명
  exampleQuestion: string;
  exampleAnswer: string;
}

export interface SchoolQuestion {
  questionId: number;
  sentence: string;
  choices: string[];
}

export interface SchoolRoundReview {
  questionId: number;
  correct: boolean;
  correctAnswer: string;
  selectedChoice?: {
    choiceId: number;
    text: string;
  };
  feedback?: string;
}

export interface SchoolRoundResult {
  answeredCount: number;
  correctCount: number;
  reviews: SchoolRoundReview[];
}

export interface SchoolAnswerResult {
  isCorrect: boolean;
  completedSentence: string;
  explanation: string;
}

export interface SchoolChoice {
  choiceId: number;
  text: string;
}

export interface SchoolRoundQuestion {
  questionId: number;
  text: string;
  choices: SchoolChoice[];
}

export interface SchoolRound {
  roundId: number;
  questions: SchoolRoundQuestion[];
}
