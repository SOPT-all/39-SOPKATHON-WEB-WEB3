import { createBrowserRouter } from 'react-router';

import RootLayout from '@/layout/RootLayout';
import AgeGroupSelectPage from '@/pages/age-group-select/AgeGroupSelectPage';
import ElementaryAgeSelectPage from '@/pages/elementary-age-select/ElementaryAgeSelectPage';
import ElementaryGameIntroPage from '@/pages/elementary-game-intro/ElementaryGameIntroPage';
import ElementaryResultPage from '@/pages/elementary-result/ElementaryResultPage';
import ElementaryRoundPage from '@/pages/elementary-round/ElementaryRoundPage';
import HomePage from '@/pages/home/HomePage';
import KidGameFinishPage from '@/pages/kid-game/KidGameFinishPage';
import KidGameGuidePage from '@/pages/kid-game/KidGameGuidePage';
import KidGamePage from '@/pages/kid-game/KidGamePage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import YoungInputPage from '@/pages/young/YoungInputPage';
import { PATH } from '@/routes/paths';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.AGE_GROUP_SELECT, element: <AgeGroupSelectPage /> },
      { path: PATH.ELEMENTARY_AGE_SELECT, element: <ElementaryAgeSelectPage /> },
      { path: PATH.KID_GAME_GUIDE, element: <KidGameGuidePage /> },
      { path: PATH.KID_GAME, element: <KidGamePage /> },
      { path: PATH.KID_GAME_FINISH, element: <KidGameFinishPage /> },
      { path: PATH.ELEMENTARY_GAME_INTRO, element: <ElementaryGameIntroPage /> },
      { path: PATH.YOUNG_INPUT, element: <YoungInputPage /> },
      { path: PATH.ELEMENTARY_ROUND, element: <ElementaryRoundPage /> },
      { path: PATH.ELEMENTARY_RESULT, element: <ElementaryResultPage /> },
      // 없는 주소 → 404 (항상 맨 마지막에 두기)
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);