import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import GameChoiceCard from '@/shared/components/GameChoiceCard';
import Header from '@/shared/components/Header';
import { SCHOOL_GAME_META } from '@/shared/constants/schoolGames';
import { useGames } from '@/shared/hooks/useSchool';

const SchoolGameListPage = () => {
  const navigate = useNavigate();
  const { data: games = [] } = useGames();
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const handleGameClick = (gameId: number) => setSelectedGameId(gameId);

  const handleCompleteClick = () => {
    if (selectedGameId === null) return;
    navigate(generatePath(PATH.SCHOOL_GAME_INTRO, { gameId: String(selectedGameId) }));
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header hasSymbol />

      <div className="mt-17 flex flex-col gap-3">
        <h2 className="text-headline-lg text-black">어떤 게임을 진행할까요?</h2>
        <p className="text-body-md-r text-[#666]">진행하고 싶은 게임을 선택해주세요.</p>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {games.map(({ gameId, name }) => {
          const meta = SCHOOL_GAME_META[gameId];
          if (!meta) return null;
          return (
            <GameChoiceCard
              key={gameId}
              iconSrc={meta.iconSrc}
              title={name}
              description={meta.summary}
              isSelected={selectedGameId === gameId}
              onCardClick={() => handleGameClick(gameId)}
            />
          );
        })}
      </div>

      <ActionButton className="mt-auto" disabled={selectedGameId === null} onClick={handleCompleteClick}>
        완료
      </ActionButton>
    </main>
  );
};

export default SchoolGameListPage;
