import { Link } from 'react-router';

import { PATH } from '@/routes/paths';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 p-5">
      <p className="text-xl font-bold">페이지를 찾을 수 없어요</p>
      <Link to={PATH.HOME} className="text-gray-500 underline">
        홈으로
      </Link>
    </main>
  );
};

export default NotFoundPage;
