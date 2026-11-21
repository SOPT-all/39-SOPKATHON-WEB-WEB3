import { generatePath, useNavigate, useParams } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import GameContextBox from '@/shared/components/GameContextBox';
import Header from '@/shared/components/Header';
import OptionCard from '@/shared/components/OptionCard';
import { MOCK_SCHOOL_GAMES } from '@/shared/constants/mockSchoolGames';

// TODO: 회차 생성 API(POST /school/games/{gameId}/rounds) 응답의 roundId로 교체
const MOCK_ROUND_ID = 1;

const SchoolGameIntroPage = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const game = MOCK_SCHOOL_GAMES.find((item) => item.gameId === Number(gameId));

  if (!game) return null;

  const handleStartClick = () => {
    navigate(generatePath(PATH.SCHOOL_ROUND, { roundId: String(MOCK_ROUND_ID) }));
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header />
      <h2 className="mt-17 text-headline-lg text-gray-900">오늘 진행할 게임이에요.</h2>
      <div className="mt-4">
        <OptionCard title={game.name} description={game.description} />
      </div>
      <div className="-mx-8 mt-24 px-8">
        <GameContextBox question={game.exampleQuestion} answer={game.exampleAnswer} />
      </div>
      <ActionButton className="mt-auto" onClick={handleStartClick}>
        놀이 시작하기
      </ActionButton>
    </main>
  );
};

export default SchoolGameIntroPage;
