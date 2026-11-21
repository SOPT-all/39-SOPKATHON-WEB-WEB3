import type { SchoolGame } from '@/shared/types/school';

// TODO: 놀이 목록 API(GET /school/games) 연동 시 이 파일 삭제 (문구는 기능명세서 데이터 표 기준)
export const MOCK_SCHOOL_GAMES: SchoolGame[] = [
  {
    gameId: 1,
    name: '문장 완성하기',
    description: '빈칸에 어울리는 표현을 선택해요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '친구가 공을 ______ .',
    exampleAnswer: '친구가 공을 던져요.',
  },
  {
    gameId: 2,
    name: '반대말 탐정',
    description: '뜻이 반대인 낱말을 찾아요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '‘크다’의 반대말은?',
    exampleAnswer: '작다',
  },
  {
    gameId: 3,
    name: '이럴 땐 뭐라고?',
    description: '학교에서 이럴 때 어떤 말을 할지 골라요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '지우개를 빌리고 싶을 땐?',
    exampleAnswer: '지우개 좀 빌려줄래?',
  },
];
