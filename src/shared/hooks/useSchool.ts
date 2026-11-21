import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getGames, getSchoolRoundResult, postRound } from '@/shared/apis/school';

export const useGames = () => useQuery({ queryKey: ['games'], queryFn: getGames, select: (data) => data.games });

export const useSchoolRoundResult = (roundId: number) =>
  useQuery({
    queryKey: ['school', 'rounds', roundId, 'result'],
    queryFn: () => getSchoolRoundResult(roundId),
    enabled: !Number.isNaN(roundId),
  });

export const useStartRound = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ gameId, age }: { gameId: number; age: number }) => postRound(gameId, { age }),
    onSuccess: (round) => queryClient.setQueryData(['rounds', round.roundId], round),
  });
};
