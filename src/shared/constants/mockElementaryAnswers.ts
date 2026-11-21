import type { ElementaryAnswerResult } from '@/shared/types/elementary';

// TODO: 답변 제출 API(POST /school/rounds/{roundId}/answers) 연동 시 이 파일 삭제
const MOCK_ELEMENTARY_ANSWERS: Record<
  number,
  { answer: string; completedSentence: string; correctExplanation: string; wrongExplanation: string }
> = {
  1: {
    answer: '던져요',
    completedSentence: '친구가 공을 던져요.',
    correctExplanation: '공을 손으로 던질 수 있어요.',
    wrongExplanation: '물은 마시고, 공은 던져요.',
  },
  2: {
    answer: '써요',
    completedSentence: '비가 오면 우산을 써요.',
    correctExplanation: '우산을 쓰면 비를 피할 수 있어요.',
    wrongExplanation: '우산은 비를 막을 때 써요.',
  },
  3: {
    answer: '기울여요',
    completedSentence: '작은 목소리가 들려서 귀를 기울여요.',
    correctExplanation: '귀를 기울인다는 말은 잘 들으려고 집중한다는 뜻이에요.',
    wrongExplanation: '잘 들으려고 집중할 때 귀를 기울인다고 해요.',
  },
};

export const getMockAnswerResult = (questionId: number, choice: string): ElementaryAnswerResult => {
  const { answer, completedSentence, correctExplanation, wrongExplanation } = MOCK_ELEMENTARY_ANSWERS[questionId];
  const isCorrect = choice === answer;
  return { isCorrect, completedSentence, explanation: isCorrect ? correctExplanation : wrongExplanation };
};
