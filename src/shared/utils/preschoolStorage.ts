import type { PreschoolRecommendation } from '@/shared/types/preschool';

// 추천 결과를 장소별 추천 → 찾기 문제 → 마무리 화면에서 함께 쓰기 위해 세션에 저장 (새로고침해도 유지, 탭을 닫으면 삭제)
const RECOMMENDATION_KEY = 'preschool-recommendation';

export const savePreschoolRecommendation = (recommendation: PreschoolRecommendation) => {
  sessionStorage.setItem(RECOMMENDATION_KEY, JSON.stringify(recommendation));
};

export const getPreschoolRecommendation = (): PreschoolRecommendation | null => {
  try {
    const saved = sessionStorage.getItem(RECOMMENDATION_KEY);
    return saved ? (JSON.parse(saved) as PreschoolRecommendation) : null;
  } catch {
    return null;
  }
};
