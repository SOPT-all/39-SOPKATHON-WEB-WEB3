import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getGames, postAnswer, postRound } from '@/shared/apis/school';
import type { SchoolAnswerRequest } from '@/shared/types/school';

export const useGames = () => useQuery({ queryKey: ['games'], queryFn: getGames, select: (data) => data.games });

export const useStartRound = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ gameId, age }: { gameId: number; age: number }) => postRound(gameId, { age }),
    onSuccess: (round) => queryClient.setQueryData(['rounds', round.roundId], round),
  });
};

// 답변을 제출하면 회차 결과(['rounds', roundId, 'result'])를 다시 불러오게 함
export const useSubmitAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ roundId, body }: { roundId: number; body: SchoolAnswerRequest }) => postAnswer(roundId, body),
    onSuccess: (_, { roundId }) => queryClient.invalidateQueries({ queryKey: ['rounds', roundId, 'result'] }),
  });
};
