# AGENTS.md

해커톤 프로젝트. 코드 퀄리티보다 빠르게 동작하는 것이 우선. 단, 아래 규칙은 지킨다.
(이 문서의 경로는 모두 `src/` 기준)

## 스택

- pnpm, Vite, React 19, TypeScript
- Tailwind CSS **v4** — 설정은 `shared/styles/index.css`의 `@theme`. `tailwind.config.js` 만들지 않기
- React Router **v8** — `react-router`에서 import. `react-router-dom` 금지
- ky **v2** — `prefix` 옵션 사용 (`prefixUrl` 아님).
- TanStack Query v5

## 폴더 구조

```
src/
├─ layout/        # 레이아웃
├─ pages/<page>/  # 페이지 (전용 컴포넌트는 pages/<page>/components/)
├─ routes/        # router.tsx, paths.ts
└─ shared/        # apis, assets, components, constants, hooks, styles, types, utils
```

- import는 `@/` 절대경로만 사용
- 2개 이상 페이지에서 쓰는 컴포넌트는 `shared/components/`

## 페이지 추가

1. `routes/paths.ts`의 `PATH`에 경로 추가
2. `routes/router.tsx`의 `children`에 추가 (`'*'`보다 위)

- 경로 문자열 하드코딩 금지, `PATH` 사용

## 네이밍

### 파일명

- 폴더: `kebab-case`
- 컴포넌트: `PascalCase`
- 훅, 유틸, API: `camelCase`

```
pages/my-page/MyPage.tsx
shared/components/LikeButton.tsx
shared/hooks/usePosts.ts
shared/apis/post.ts
```

### 변수 / 함수명

- 변수, 함수: `camelCase`
- 상수: `UPPER_SNAKE_CASE`
- boolean: `is`, `has`로 시작
- 이벤트 핸들러: `handle` + 대상 + 동작 / props로 넘길 때는 `on` + 대상 + 동작

```tsx
const MAX_LENGTH = 20;
const isOpen = true;
const hasError = false;

const handleLikeClick = () => {};
<LikeButton onLikeClick={handleLikeClick} />;
```

### 타입명

- `PascalCase`
- 객체, Props: `interface` / 유니온 등 `interface`로 표현할 수 없는 경우 `type`
- Props 타입은 `컴포넌트명Props`, 컴포넌트 파일 안에 정의
- 도메인 타입(서버 데이터 등)은 `shared/types/<도메인>.ts`에 정의

```tsx
interface PostCardProps {
  post: Post;
}

type Status = 'idle' | 'loading' | 'success' | 'error';
```

## 컴포넌트 선언

- 화살표 함수 + `export default`
- 한 파일에 컴포넌트 하나

```tsx
const PostCard = ({ post }: PostCardProps) => {
  return <div>{post.title}</div>;
};

export default PostCard;
```

## 스타일

- Tailwind 클래스만 사용. 새 CSS 파일, `style={{}}` 사용하지 않기
- 색상은 `shared/styles/index.css`의 `@theme`, 텍스트 스타일은 `@utility`에 정의된 토큰 사용
  - 토큰이 있으면 임의값(`text-[#3d5afe]`, `text-[18px]`) 대신 토큰 사용
  - 필요한 토큰이 없으면 임의로 만들지 말고 먼저 물어보기
- 전역 스타일(reset 등)은 이미 세팅되어 있음. 추가하지 않기

## API 호출

**타입 → API 함수 → Query 훅 → 컴포넌트** 순서로 작성

### 1. 타입 — `shared/types/<도메인>.ts`

```ts
// shared/types/post.ts
export interface Post {
  id: number;
  title: string;
}
```

### 2. API 함수 — `shared/apis/<도메인>.ts`

- `shared/apis/client.ts`의 `http` 헬퍼 사용 → 서버 공통 응답(`ApiResponse<T>`)에서 `data`만 꺼내서 반환
- 함수명: HTTP 메서드 + 대상 (`getPosts`, `postLike`, `deletePost`)
- URL 앞에 `/` 붙이지 않기 (붙여도 동작하지만 표기 통일)
- 인자 순서
  - `post` / `patch` / `put`: 두 번째 = body(JSON 전송), 세 번째 = 옵션
  - `get` / `delete`: 두 번째 = 옵션 (예: `http.get('posts', { searchParams: { page: 1 } })`)

```ts
// shared/apis/post.ts
import { http } from '@/shared/apis/client';
import type { Post } from '@/shared/types/post';

export const getPosts = () => http.get<Post[]>('posts');
export const getPost = (postId: number) => http.get<Post>(`posts/${postId}`);
export const postLike = (postId: number) => http.post<void>(`posts/${postId}/like`);
export const patchPost = (postId: number, body: { title: string }) => http.patch<Post>(`posts/${postId}`, body);
```

### 3. Query 훅 — `shared/hooks/use<도메인>.ts`

- 조회는 `useQuery`, 변경은 `useMutation`
- 변경 성공 시 `invalidateQueries`로 목록 갱신 (`['posts']`로 무효화하면 `['posts', 1]` 같은 하위 키도 함께 갱신)
- `mutationFn`은 인자를 1개만 받음 → API 함수 인자가 2개 이상이면 객체로 묶기

```ts
// shared/hooks/usePosts.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPosts, patchPost, postLike } from '@/shared/apis/post';

// 조회
export const usePosts = () => useQuery({ queryKey: ['posts'], queryFn: getPosts });

// 변경 — 인자 1개
export const useLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLike,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });
};

// 변경 — 인자 2개 이상 (객체로 묶기)
export const usePatchPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ postId, body }: { postId: number; body: { title: string } }) => patchPost(postId, body),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });
};
```

### 4. 컴포넌트에서 사용

```tsx
const { data: posts, isPending } = usePosts();
const { mutate: likePost } = useLikePost();
const { mutate: patchPostMutate } = usePatchPost();

const handleLikeClick = (postId: number) => likePost(postId);
const handleTitleSave = (postId: number, title: string) => patchPostMutate({ postId, body: { title } });
```

### 하지 말 것

- 컴포넌트에서 `api`, `http`, `ky` 직접 호출 금지 → 반드시 `shared/apis/` 함수를 거치기
- API 파일, 컴포넌트 파일 안에 도메인 타입 정의 금지 → `shared/types/`

### 참고

- 인증 헤더(예: `userId`)가 필요하면 `client.ts`에 주석 처리된 `hooks.beforeRequest`를 풀어서 사용

## 이미지 / 아이콘

- `shared/assets/`에 저장
- 파일명: `kebab-case`, 아이콘은 `icon-`, 이미지는 `img-`로 시작

```
shared/assets/icon-heart.svg
shared/assets/img-main-banner.png
```

## Git

### 브랜치

- `main`: 최종 merge 브랜치 (직접 작업 금지)
- 브랜치명: `유형/기능/#이슈번호`, 기능명은 `kebab-case`

```
feat/header/#1
fix/error-catch/#20
```

### 커밋

- 형식: `타입: 내용`

| 타입    | 용도                       |
| ------- | -------------------------- |
| `feat`  | 새로운 기능 구현           |
| `fix`   | 버그 수정                  |
| `chore` | 패키지 매니저 등 기타 수정 |
| `docs`  | 문서 작업                  |
| `init`  | 프로젝트 초기 세팅         |

```
feat: 홈 레이아웃 구현
chore: 폰트 파일 추가
```

### PR

- 제목은 커밋 형식과 동일 (`feat: 홈 레이아웃 구현`) — Squash and Merge 시 이 제목이 커밋이 됨

## 확인

- 작업 후 `pnpm build` 통과 확인
