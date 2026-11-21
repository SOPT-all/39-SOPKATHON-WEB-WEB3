import { http } from '@/shared/apis/client';
import type { SchoolGameList, SchoolRoundResult } from '@/shared/types/school';

export const getGames = () => http.get<SchoolGameList>('school/games');

export const getSchoolRoundResult = (roundId: number) => http.get<SchoolRoundResult>(`school/rounds/${roundId}/result`);
