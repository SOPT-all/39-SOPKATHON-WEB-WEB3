import { http } from '@/shared/apis/client';
import type { SchoolGameList, SchoolRound } from '@/shared/types/school';

export const getGames = () => http.get<SchoolGameList>('school/games');

export const postRound = (gameId: number, body: { age: number }) =>
  http.post<SchoolRound>(`school/games/${gameId}/rounds`, body);
