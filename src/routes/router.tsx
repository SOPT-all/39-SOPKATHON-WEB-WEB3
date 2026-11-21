import { createBrowserRouter } from 'react-router';

import RootLayout from '@/layout/RootLayout';
import ElementaryAgeSelectPage from '@/pages/elementary/ElementaryAgeSelectPage';
import ElementaryGameIntroPage from '@/pages/elementary-game-intro/ElementaryGameIntroPage';
import HomePage from '@/pages/home/HomePage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import YoungInputPage from '@/pages/young/YoungInputPage';
import { PATH } from '@/routes/paths';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.ELEMENTARY_AGE_SELECT, element: <ElementaryAgeSelectPage /> },
      { path: PATH.ELEMENTARY_GAME_INTRO, element: <ElementaryGameIntroPage /> },
      { path: PATH.YOUNG_INPUT, element: <YoungInputPage /> },
      // 없는 주소 → 404 (항상 맨 마지막에 두기)
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
