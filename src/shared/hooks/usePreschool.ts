import { useMutation } from '@tanstack/react-query';

import { postPreschoolRecommendation } from '@/shared/apis/preschool';

// 놀이 추천 (질문 3개 생성)
export const usePostPreschoolRecommendation = () =>
  useMutation({
    mutationFn: postPreschoolRecommendation,
  });
