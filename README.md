<div align="center">

<h1>해봄</h1>

<img width="1920" height="1080" alt="발표장표" src="https://github.com/user-attachments/assets/cecfb8d8-8e4e-4bd6-9169-50388450a3c9" />


<p>
  식당이나 병원에서 기다리는 시간을<br/>
  유아의 <b>주변 물건 찾기</b>와 초등학생의 <b>학교생활 표현 게임</b>으로<br/>
  <b>말해 보고, 생각해 보고, 선택해 보는</b> 학습 놀이로 바꾸는 웹 서비스
</p>

</div>

<br/>

## ✨ 주요 기능

<table>
  <tr align="center">
    <th width="50%">1️⃣ 유아 (4~7세) · 장소별 주변 물건 찾기</th>
    <th width="50%">2️⃣ 초등 저학년 (8~10세) · 학교생활 표현 게임</th>
  </tr>
  <tr align="center">
    <td><img width="600" alt="핵심기능1" src="https://github.com/user-attachments/assets/4e3fbcbb-9f70-45a1-8882-728811f063ab" />
</td>
    <td><img width="600" alt="핵심기능2" src="https://github.com/user-attachments/assets/14aa7895-5cb3-4571-af09-65d09697107d" />
</td>
  </tr>
<tr align="center">
    <td><b>📍 지금 있는 장소에 맞춘 놀이</b></td>
    <td><b>✏️ 혼자 읽고 직접 고르는 미션</b></td>
  </tr>
  <tr valign="top">
    <td>
      <ol>
        <li>아이 <b>나이 · 장소 · 대기시간</b> 입력</li>
        <li>해봄이 장소에 맞는 놀이 추천</li>
        <li>양육자가 질문을 읽어주면<br/>아이가 주변에서 물건을 찾아 가리키기</li>
        <li><b>[찾았어요]</b>를 눌러 다음 문제로 (총 3문제)</li>
        <li><b>오늘 찾은 물건</b>을 넘겨보며 마무리</li>
      </ol>
    </td>
    <td>
      <ol>
        <li>나이 선택 후 놀이 고르기
          <ul>
            <li><b>문장 완성하기</b> · 빈칸에 맞는 낱말</li>
            <li><b>반대말 탐정</b> · 뜻이 반대인 낱말</li>
            <li><b>이럴 땐 뭐라고?</b> · 상황에 맞는 말</li>
          </ul>
        </li>
        <li>두 표현 중 하나 고르기 (총 3문제)</li>
        <li>바로 <b>완성된 문장과 설명</b> 확인</li>
        <li><b>맞힌 개수와 완성한 문장</b> 요약 보기</li>
      </ol>
    </td>
  </tr>
</table>

<br/>

## 🗺 사용자 플로우

```
연령대 선택
├─ 유아 (4~7세)
│   아이 정보 입력 (나이 · 장소 · 대기시간) → 놀이 추천 로딩 → 놀이 안내
│   → 주변 물건 찾기 (3문제) → 놀이 마무리 (오늘 찾은 물건)
│
└─ 초등 저학년 (8~10세)
    나이 선택 → 놀이 목록 → 놀이 소개 (예시 문제)
    → 문제 풀이 · 즉시 피드백 (3문제) → 게임 요약
```

<br/>

## 👥 Team

<div align="center">
<table>
  <tr align="center">
    <td width="180">
      <a href="https://github.com/joyrii">
        <img src="https://github.com/joyrii.png" width="140" alt="joyrii-프로필사진" />
      </a>
    </td>
    <td width="180">
      <a href="https://github.com/kimxeesoo">
        <img src="https://github.com/kimxeesoo.png" width="140" alt="kimxeesoo-프로필사진" />
      </a>
    </td>
    <td width="180">
      <a href="https://github.com/Junho73">
        <img src="https://github.com/Junho73.png" width="140" alt="Junho73-프로필사진" />
      </a>
    </td>
    <td width="180">
      <a href="https://github.com/huijeanjang">
        <img src="https://github.com/huijeanjang.png" width="140" alt="huijeanjang-프로필사진" />
      </a>
    </td>
  </tr>
  <tr align="center">
    <td><b>조예슬</b><br/><a href="https://github.com/joyrii">@joyrii</a></td>
    <td><b>김희수</b><br/><a href="https://github.com/kimxeesoo">@kimxeesoo</a></td>
    <td><b>장준호</b><br/><a href="https://github.com/Junho73">@Junho73</a></td>
    <td><b>장희진</b><br/><a href="https://github.com/huijeanjang">@huijeanjang</a></td>
  </tr>
  <tr align="center">
    <td>유아 놀이 플로우</td>
    <td>초등학생 온보딩</td>
    <td>초등학생 놀이 플로우</td>
    <td>유아 온보딩</td>
  </tr>
</table>
</div>

<br/>

## 🛠 기술 스택

| 역할                   | 기술                             |
| ---------------------- | -------------------------------- |
| 패키지 매니저 / 번들러 | pnpm, Vite                       |
| 언어 / 프레임워크      | React 19, TypeScript             |
| 스타일                 | Tailwind CSS v4                  |
| 라우팅                 | React Router v8                  |
| HTTP 클라이언트        | ky v2                            |
| 서버 상태 관리         | TanStack Query v5                |
| 코드 품질              | ESLint, Prettier                 |
| CI / CD                | GitHub Actions, Vercel           |

<br/>

## 🚀 CI / CD

| 워크플로 | 시점            | 내용                         |
| -------- | --------------- | ---------------------------- |
| `CI`     | PR 생성 · 업데이트 | 빌드 검사                    |
| `CD`     | `main` push      | Vercel Production 자동 배포 |

<br/>

## 📄 컨벤션 및 브랜치 전략

### 커밋 컨벤션

> `타입: 작업 내용` &nbsp;예) `feat: 홈 레이아웃 구현`

| 타입    | 용도                       |
| ------- | -------------------------- |
| `feat`  | 새로운 기능 구현           |
| `fix`   | 버그 수정                  |
| `chore` | 패키지 매니저 등 기타 수정 |
| `docs`  | 문서 작업                  |
| `init`  | 프로젝트 초기 세팅         |

### 브랜치

> `유형/기능/#이슈번호` (기능명은 `kebab-case`) &nbsp;예) `feat/header/#1`, `fix/error-catch/#20`

| 브랜치 | 용도                                      |
| ------ | ----------------------------------------- |
| `main` | 최종 merge 브랜치 (항상 배포 가능한 상태) |
| `feat` | 기능 단위 작업 브랜치                     |
| `fix`  | 긴급 오류 해결 브랜치                     |

### 머지 규칙

- **Squash and Merge**, 커밋 메시지는 PR 제목 그대로
- 리뷰 없이 **Self Merge** 가능, 머지 후 단톡방에 꼭 공유하기
- 머지 전 `pnpm build`와 서비스 동작 확인
- 머지 후 브랜치 삭제
- 작업 시작 전, PR 올리기 전에 `main` pull 받기

<br/>

## 📁 프로젝트 구조

```
📦 src/
├── 🗂️ layout/          # 레이아웃
├── 🗂️ pages/           # 페이지 (전용 컴포넌트는 pages/<page>/components/)
│   ├── 🗂️ age-group-select/   # 연령대 선택
│   ├── 🗂️ preschool/          # 유아: input, game-guide, game, game-finish
│   └── 🗂️ school/             # 초등: age-select, game-list, game-intro, round, result
├── 🗂️ routes/          # 라우터, 경로 상수
└── 🗂️ shared/          # 공용
    ├── 🗂️ apis/        # API 함수, ky 클라이언트
    ├── 🗂️ assets/      # 이미지, 아이콘
    ├── 🗂️ components/  # 공통 컴포넌트
    ├── 🗂️ constants/   # 상수
    ├── 🗂️ hooks/       # 커스텀 훅, Query 훅
    ├── 🗂️ styles/      # 전역 스타일, 디자인 토큰
    ├── 🗂️ types/       # 공통 타입
    └── 🗂️ utils/       # 유틸 함수
```

<br/>

## ▶️ 실행 방법

```bash
pnpm install
pnpm dev     # 개발 서버
pnpm build   # 빌드 검사
```

<br/>

## 🫶 우리 조 그라운드 룰

1. **행복하게 밝게 자신있게~**
2. **웃으면서 하기!** 우울하지 말자!
3. **의견 전달은 분명하고 예의있게.**
4. **말없이 사라지기 금지** ㅎㅎ
5. **끝까지 즐기는 최강낭만솝커톤** ✨

<br/>

## 🌰 웹토리팟 Before and After

<table>
  <tr align="center">
    <th>Before</th>
    <th>After</th>
  </tr>
  <tr align="center">
    <td><img width="380" alt="웨비 팀원들 사진 (before)" src="https://github.com/user-attachments/assets/22863aae-653a-4783-b7b7-671cd4b6e2e1" /></td>
    <td><img width="380" alt="웨비 팀원들 사진(after)" src="https://github.com/user-attachments/assets/38b9b363-5c98-450f-9f48-ad466f71b468" />
</td>
  </tr>
</table>
