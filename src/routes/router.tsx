import { createBrowserRouter } from 'react-router';

import RootLayout from '@/layout/RootLayout';
import HomePage from '@/pages/home/HomePage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import { PATH } from '@/routes/paths';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      // 없는 주소 → 404 (항상 맨 마지막에 두기)
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
