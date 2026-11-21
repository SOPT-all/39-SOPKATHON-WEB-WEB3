import { createBrowserRouter } from 'react-router';

import RootLayout from '@/layout/RootLayout';
import ElementaryAgeSelectPage from '@/pages/elementary/ElementaryAgeSelectPage';
import HomePage from '@/pages/home/HomePage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import { PATH } from '@/routes/paths';
import KidGameGuidePage from '@/pages/kid-game/KidGameGuidePage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.ELEMENTARY_AGE_SELECT, element: <ElementaryAgeSelectPage /> },
      { path: PATH.KID_GAME_GUIDE, element: <KidGameGuidePage /> },
      // 없는 주소 → 404 (항상 맨 마지막에 두기)
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
