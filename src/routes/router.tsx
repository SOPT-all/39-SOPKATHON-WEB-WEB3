import { createBrowserRouter } from 'react-router';

import RootLayout from '@/layout/RootLayout';
import AgeGroupSelectPage from '@/pages/age-group-select/AgeGroupSelectPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import PreschoolGamePage from '@/pages/preschool/game/PreschoolGamePage';
import PreschoolGameFinishPage from '@/pages/preschool/game-finish/PreschoolGameFinishPage';
import PreschoolGameGuidePage from '@/pages/preschool/game-guide/PreschoolGameGuidePage';
import PreschoolInputPage from '@/pages/preschool/input/PreschoolInputPage';
import SchoolAgeSelectPage from '@/pages/school/age-select/SchoolAgeSelectPage';
import SchoolGameIntroPage from '@/pages/school/game-intro/SchoolGameIntroPage';
import SchoolGameListPage from '@/pages/school/game-list/SchoolGameListPage';
import SchoolResultPage from '@/pages/school/result/SchoolResultPage';
import SchoolRoundPage from '@/pages/school/round/SchoolRoundPage';
import { PATH } from '@/routes/paths';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.HOME, element: <AgeGroupSelectPage /> },

      // 유아
      { path: PATH.PRESCHOOL_INPUT, element: <PreschoolInputPage /> },
      { path: PATH.PRESCHOOL_GAME_GUIDE, element: <PreschoolGameGuidePage /> },
      { path: PATH.PRESCHOOL_GAME, element: <PreschoolGamePage /> },
      { path: PATH.PRESCHOOL_GAME_FINISH, element: <PreschoolGameFinishPage /> },

      // 초등
      { path: PATH.SCHOOL_AGE_SELECT, element: <SchoolAgeSelectPage /> },
      { path: PATH.SCHOOL_GAMES, element: <SchoolGameListPage /> },
      { path: PATH.SCHOOL_GAME_INTRO, element: <SchoolGameIntroPage /> },
      { path: PATH.SCHOOL_ROUND, element: <SchoolRoundPage /> },
      { path: PATH.SCHOOL_RESULT, element: <SchoolResultPage /> },

      // 없는 주소 → 404 (항상 맨 마지막에 두기)
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
