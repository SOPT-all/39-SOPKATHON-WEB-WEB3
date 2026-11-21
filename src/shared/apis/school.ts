import { http } from '@/shared/apis/client';
import type {
  SchoolAnswer,
  SchoolAnswerRequest,
  SchoolGameList,
  SchoolRound,
  SchoolRoundResult,
} from '@/shared/types/school';

export const getGames = () => http.get<SchoolGameList>('school/games');

export const getSchoolRoundResult = (roundId: number) => http.get<SchoolRoundResult>(`school/rounds/${roundId}/result`);

export const postRound = (gameId: number, body: { age: number }) =>
  http.post<SchoolRound>(`school/games/${gameId}/rounds`, body);

export const postAnswer = (roundId: number, body: SchoolAnswerRequest) =>
  http.post<SchoolAnswer>(`school/rounds/${roundId}/answers`, body);
