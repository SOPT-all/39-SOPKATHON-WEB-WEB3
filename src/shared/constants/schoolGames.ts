import iconQuestionMark from '@/shared/assets/icon-question-mark.svg';
import iconSearch from '@/shared/assets/icon-search.svg';
import iconSpeechBubble from '@/shared/assets/icon-speech-bubble.svg';
import type { SchoolGameMeta } from '@/shared/types/school';

// 서버(GET /school/games)의 gameId 기준
export const SCHOOL_GAME_META: Record<number, SchoolGameMeta> = {
  1: {
    iconSrc: iconSpeechBubble,
    summary: '낱말을 넣어 문장을 완성해요',
    description: '빈칸에 어울리는 표현을 선택해요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '친구가 공을 ______ .',
    exampleAnswer: '친구가 공을 던져요.',
  },
  2: {
    iconSrc: iconSearch,
    summary: '반대되는 표현을 골라요',
    description: '뜻이 반대인 낱말을 찾아요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '‘크다’의 반대말은?',
    exampleAnswer: '작다',
  },
  3: {
    iconSrc: iconQuestionMark,
    summary: '상황에 맞는 말을 골라요',
    description: '학교에서 이럴 때 어떤 말을 할지 골라요.\n세 문제를 차례로 풀어 봐요.',
    exampleQuestion: '지우개를 빌리고 싶을 땐?',
    exampleAnswer: '지우개 좀 빌려줄래?',
  },
};
