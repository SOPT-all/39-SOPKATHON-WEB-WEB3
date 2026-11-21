import type { ElementaryRoundResult } from '@/shared/types/elementary';

// TODO: 회차 결과 API(GET /school/rounds/{roundId}/result) 연동 시 이 파일 삭제
export const MOCK_ELEMENTARY_RESULT: ElementaryRoundResult = {
  totalCount: 3,
  correctCount: 2,
  questions: [
    { questionNumber: 1, isCorrect: true, completedSentence: '친구가 공을 던져요.' },
    { questionNumber: 2, isCorrect: false, completedSentence: '비가 오면 우산을 써요.' },
    { questionNumber: 3, isCorrect: true, completedSentence: '작은 목소리가 들려서 귀를 기울여요.' },
  ],
};
