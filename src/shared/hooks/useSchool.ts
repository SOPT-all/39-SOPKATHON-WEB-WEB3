import { useQuery } from '@tanstack/react-query';

import { getGames } from '@/shared/apis/school';

export const useGames = () => useQuery({ queryKey: ['games'], queryFn: getGames, select: (data) => data.games });
