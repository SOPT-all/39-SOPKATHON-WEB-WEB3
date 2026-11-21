import type { ElementaryGame } from '@/shared/types/elementary';

// TODO: 놀이 목록 API(GET /school/games) 연동 시 이 파일 삭제
export const MOCK_ELEMENTARY_GAMES: ElementaryGame[] = [
  {
    gameId: 1,
    name: '문장 완성하기',
    description: '빈칸에 어울리는 표현을 선택해요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '친구가 공을 ______ .',
    exampleAnswer: '친구가 공을 던져요.',
  },
];
