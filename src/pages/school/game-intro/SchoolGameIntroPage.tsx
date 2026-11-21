import { generatePath, useNavigate, useParams } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import GameContextBox from '@/shared/components/GameContextBox';
import Header from '@/shared/components/Header';
import OptionCard from '@/shared/components/OptionCard';
import { SCHOOL_GAME_META } from '@/shared/constants/schoolGames';
import { useGames } from '@/shared/hooks/useSchool';

// TODO: 회차 생성 API(POST /school/games/{gameId}/rounds) 응답의 roundId로 교체
const MOCK_ROUND_ID = 1;

const SchoolGameIntroPage = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { data: games } = useGames();
  const game = games?.find((item) => item.gameId === Number(gameId));
  const meta = SCHOOL_GAME_META[Number(gameId)];

  if (!game || !meta) return null;

  const handleStartClick = () => {
    navigate(generatePath(PATH.SCHOOL_ROUND, { roundId: String(MOCK_ROUND_ID) }));
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header />
      <h2 className="mt-17 text-headline-lg text-gray-900">오늘 진행할 게임이에요.</h2>
      <div className="mt-4">
        <OptionCard title={game.name} description={meta.description} />
      </div>
      <div className="-mx-8 mt-24 px-15">
        <GameContextBox question={meta.exampleQuestion} answer={meta.exampleAnswer} />
      </div>
      <ActionButton className="mt-auto" onClick={handleStartClick}>
        놀이 시작하기
      </ActionButton>
    </main>
  );
};

export default SchoolGameIntroPage;
