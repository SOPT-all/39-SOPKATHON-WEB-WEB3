<div align="center">

<h1>해봄</h1>

<img src="" width="600" alt="서비스대표-이미지" />

<p>
  식당이나 병원에서 기다리는 시간을<br/>
  유아의 <b>그림 찾기</b>와 초등학생의 <b>생활 미션</b>으로<br/>
  <b>말해 보고, 생각해 보고, 선택해 보는</b> 학습 놀이로 바꾸는 웹 서비스
</p>

</div>

<br/>

## ✨ 주요 기능

<table>
  <tr align="center">
    <th width="50%">1️⃣ 유아 · 장소별 주변 찾기 놀이</th>
    <th width="50%">2️⃣ 초등학생 · 학교생활 표현 게임</th>
  </tr>
  <tr align="center">
    <td><img src="" width="280" alt="기능1-대표이미지" /></td>
    <td><img src="" width="280" alt="기능2-대표이미지" /></td>
  </tr>
  <tr>
    <td>
      <b>입력한 장소에 맞는 놀이</b><br/>
      양육자가 질문을 읽어주면, 아이는 실제 주변에서 모양이나 색깔을 찾아 가리켜요.
      찾으면 [찾았어요]를 눌러 다음 문제로 넘어가요.
    </td>
    <td>
      <b>혼자 읽고 직접 고르는 미션</b><br/>
      문장 완성하기, 반대말 탐정, 이럴 땐 뭐라고? 중 하나를 골라
      두 표현 중 알맞은 것을 선택하고, 바로 설명을 확인해요.
    </td>
  </tr>
</table>

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

| 역할                   | 기술                    |
| ---------------------- | ----------------------- |
| 패키지 매니저 / 번들러 | pnpm, Vite              |
| 언어                   | React 19, TypeScript    |
| 스타일                 | Tailwind CSS v4         |
| 라우팅                 | React Router            |
| HTTP 클라이언트        | ky                      |
| 서버 상태 관리         | TanStack Query          |
| 배포                   | Vercel (GitHub Actions) |

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
    <td><img width="380" src="" alt="웨비 팀원들 사진 (after)" /></td>
  </tr>
</table>
