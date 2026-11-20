import ky, { type Options } from 'ky';

import type { ApiResponse } from '@/shared/types/api';

// ky 인스턴스 — 모든 API 요청은 이걸로
export const api = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  retry: 0,
  // 인증 헤더 필요 시
  // hooks: {
  //   beforeRequest: [({ request }) => request.headers.set('userId', '1')],
  // },
});

// 공통 응답에서 data만 꺼내주는 헬퍼
// 사용: const posts = await http.get<Post[]>('posts');
export const http = {
  get: async <T>(url: string, options?: Options) => (await api.get(url, options).json<ApiResponse<T>>()).data,
  post: async <T>(url: string, json?: unknown, options?: Options) =>
    (await api.post(url, { ...options, json }).json<ApiResponse<T>>()).data,
  patch: async <T>(url: string, json?: unknown, options?: Options) =>
    (await api.patch(url, { ...options, json }).json<ApiResponse<T>>()).data,
  put: async <T>(url: string, json?: unknown, options?: Options) =>
    (await api.put(url, { ...options, json }).json<ApiResponse<T>>()).data,
  delete: async <T>(url: string, options?: Options) => (await api.delete(url, options).json<ApiResponse<T>>()).data,
};
