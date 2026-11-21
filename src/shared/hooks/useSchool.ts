import { useQuery } from '@tanstack/react-query';

import { getGames, getSchoolRoundResult } from '@/shared/apis/school';

export const useGames = () => useQuery({ queryKey: ['games'], queryFn: getGames, select: (data) => data.games });

export const useSchoolRoundResult = (roundId: number) =>
  useQuery({
    queryKey: ['school', 'rounds', roundId, 'result'],
    queryFn: () => getSchoolRoundResult(roundId),
    enabled: !Number.isNaN(roundId),
  });
