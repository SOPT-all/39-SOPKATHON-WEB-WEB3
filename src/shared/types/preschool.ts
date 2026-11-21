// 놀이 추천 요청 (POST /preschool/recommendations)
export interface PreschoolRecommendationRequest {
  age: number; // 4~7
  placeName: string;
  waitingMinutes?: number; // 5, 10, 15, 20, 25, 30 중 하나. 선택 안 하면 키 생략
}

export interface PreschoolQuestion {
  text: string;
  imageUrl: string;
}

// 놀이 추천 응답
export interface PreschoolRecommendation {
  placeName: string;
  questions: PreschoolQuestion[]; // 출제 순서대로 3개
}
