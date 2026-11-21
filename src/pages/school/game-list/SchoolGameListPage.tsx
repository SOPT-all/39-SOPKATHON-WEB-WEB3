import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import iconQuestionMark from '@/shared/assets/icon-question-mark.svg';
import iconSearch from '@/shared/assets/icon-search.svg';
import iconSpeechBubble from '@/shared/assets/icon-speech-bubble.svg';
import ActionButton from '@/shared/components/ActionButton';
import GameChoiceCard from '@/shared/components/GameChoiceCard';
import Header from '@/shared/components/Header';

// TODO: 놀이 목록 API(GET /school/games) 연동 시 gameId를 응답값으로 교체
const GAME_OPTIONS = [
  { gameId: 1, iconSrc: iconSpeechBubble, title: '문장 완성하기', description: '낱말을 넣어 문장을 완성해요' },
  { gameId: 2, iconSrc: iconSearch, title: '반대말 탐정', description: '반대되는 표현을 골라요' },
  { gameId: 3, iconSrc: iconQuestionMark, title: '이럴 땐 뭐라고?', description: '상황에 맞는 말을 골라요' },
];

const SchoolGameListPage = () => {
  const navigate = useNavigate();
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
        {GAME_OPTIONS.map(({ gameId, iconSrc, title, description }) => (
          <GameChoiceCard
            key={gameId}
            iconSrc={iconSrc}
            title={title}
            description={description}
            isSelected={selectedGameId === gameId}
            onCardClick={() => handleGameClick(gameId)}
          />
        ))}
      </div>

      <ActionButton className="mt-auto" disabled={selectedGameId === null} onClick={handleCompleteClick}>
        완료
      </ActionButton>
    </main>
  );
};

export default SchoolGameListPage;
