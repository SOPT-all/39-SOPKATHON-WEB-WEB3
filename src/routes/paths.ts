export const PATH = {
  HOME: '/', // 첫 화면: 연령대 선택

  // 유아
  PRESCHOOL_INPUT: '/preschool/input',
  PRESCHOOL_GAME_GUIDE: '/preschool/game-guide',
  PRESCHOOL_GAME: '/preschool/game',
  PRESCHOOL_GAME_FINISH: '/preschool/game/finish',

  // 초등
  SCHOOL_AGE_SELECT: '/school/age-select',
  SCHOOL_GAMES: '/school/games',
  SCHOOL_GAME_INTRO: '/school/games/:gameId',
  SCHOOL_ROUND: '/school/rounds/:roundId',
  SCHOOL_RESULT: '/school/rounds/:roundId/result',
} as const;
