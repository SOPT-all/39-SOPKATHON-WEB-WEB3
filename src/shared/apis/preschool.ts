import { http } from '@/shared/apis/client';
import type { PreschoolRecommendation, PreschoolRecommendationRequest } from '@/shared/types/preschool';

export const postPreschoolRecommendation = (body: PreschoolRecommendationRequest) =>
  http.post<PreschoolRecommendation>('preschool/recommendations', body);
