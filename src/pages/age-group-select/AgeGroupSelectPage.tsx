import { useState } from 'react';
import { useNavigate } from 'react-router';

import AgeGroupCard from '@/pages/age-group-select/components/AgeGroupCard';
import { PATH } from '@/routes/paths';
import iconLoadingCharacterBlue from '@/shared/assets/icon-loading-character-blue.svg';
import iconLoadingCharacterYellow from '@/shared/assets/icon-loading-character-yellow.svg';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';

const AGE_GROUPS = [
  {
    id: 'preschool',
    title: '유아',
    ageRange: '4~7세',
    iconSrc: iconLoadingCharacterYellow,
    path: PATH.PRESCHOOL_INPUT,
  },
  {
    id: 'school',
    title: '초등 저학년',
    ageRange: '8~10세',
    iconSrc: iconLoadingCharacterBlue,
    path: PATH.SCHOOL_AGE_SELECT,
  },
];

const AgeGroupSelectPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedGroup = AGE_GROUPS.find((group) => group.id === selectedId);

  const handleCardClick = (id: string) => setSelectedId(id);

  const handleNextClick = () => {
    if (!selectedGroup) return;
    navigate(selectedGroup.path);
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header hasSymbol hasBackButton={false} />

      <h2 className="mt-17 text-headline-lg text-gray-900">연령대를 선택해주세요.</h2>

      <div className="mt-7 grid grid-cols-2 gap-3">
        {AGE_GROUPS.map(({ id, title, ageRange, iconSrc }) => (
          <AgeGroupCard
            key={id}
            title={title}
            ageRange={ageRange}
            iconSrc={iconSrc}
            isSelected={selectedId === id}
            onCardClick={() => handleCardClick(id)}
          />
        ))}
      </div>

      <ActionButton className="mt-auto" disabled={!selectedGroup} onClick={handleNextClick}>
        다음
      </ActionButton>
    </main>
  );
};

export default AgeGroupSelectPage;
