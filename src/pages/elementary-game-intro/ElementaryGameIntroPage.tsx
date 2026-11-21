import { generatePath, useNavigate, useParams } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import GameContextBox from '@/shared/components/GameContextBox';
import Header from '@/shared/components/Header';
import OptionCard from '@/shared/components/OptionCard';
import { MOCK_ELEMENTARY_GAMES } from '@/shared/constants/mockElementaryGames';

// TODO: 회차 생성 API(POST /school/games/{gameId}/rounds) 응답의 roundId로 교체
const MOCK_ROUND_ID = 1;

const ElementaryGameIntroPage = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const game = MOCK_ELEMENTARY_GAMES.find((item) => item.gameId === Number(gameId));

  if (!game) return null;

  const handleStartClick = () => {
    navigate(generatePath(PATH.ELEMENTARY_ROUND, { roundId: String(MOCK_ROUND_ID) }));
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pt-[66px] pb-8">
      <Header />
      <h2 className="mt-17 text-headline-lg text-gray-900">오늘 진행할 게임이에요.</h2>
      <div className="mt-4">
        <OptionCard title={game.name} description={game.description} />
      </div>
      <div className="mt-24">
        <GameContextBox question={game.exampleQuestion} answer={game.exampleAnswer} />
      </div>
      <ActionButton className="mt-auto" onClick={handleStartClick}>
        놀이 시작하기
      </ActionButton>
    </main>
  );
};

export default ElementaryGameIntroPage;
