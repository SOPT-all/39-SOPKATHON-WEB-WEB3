// 서버 공통 응답 형태 — 당일 필드명 반영
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
