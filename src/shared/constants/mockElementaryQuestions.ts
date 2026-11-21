import type { ElementaryQuestion } from '@/shared/types/elementary';

// TODO: 회차 생성 API(POST /school/games/{gameId}/rounds) 연동 시 이 파일 삭제
export const MOCK_ELEMENTARY_QUESTIONS: ElementaryQuestion[] = [
  { questionId: 1, sentence: '친구가 공을 ______ .', choices: ['던져요', '마셔요'] },
  { questionId: 2, sentence: '비가 오면 우산을 ______ .', choices: ['써요', '먹어요'] },
  { questionId: 3, sentence: '작은 목소리가 들려서 귀를 ______ .', choices: ['접어요', '기울여요'] },
];
