import { http } from '@/shared/apis/client';
import type { SchoolGameList } from '@/shared/types/school';

export const getGames = () => http.get<SchoolGameList>('school/games'); 