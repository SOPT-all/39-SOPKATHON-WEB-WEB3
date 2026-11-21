import { useState } from 'react';
import { useNavigate } from 'react-router';

import AgeGroupCard from '@/pages/age-group-select/components/AgeGroupCard';
import { PATH } from '@/routes/paths';
import iconCharacterBlue from '@/shared/assets/icon-character-blue.svg';
import iconCharacterYellow from '@/shared/assets/icon-character-yellow.svg';
import Header from '@/shared/components/Header';

const AGE_GROUPS = [
  { id: 'kid', title: '유아', ageRange: '4~7세', iconSrc: iconCharacterYellow, path: PATH.YOUNG_INPUT },
  { id: 'elementary', title: '초등 저학년', ageRange: '8~10세', iconSrc: iconCharacterBlue, path: PATH.ELEMENTARY_AGE_SELECT },
];

const AgeGroupSelectPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (id: string, path: string) => {
    setSelectedId(id);
    if (path) navigate(path);
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header hasSymbol />

      <h2 className="mt-17 text-headline-lg text-gray-900">연령대를 선택해주세요.</h2>

      <div className="mt-7 grid grid-cols-2 gap-3">
        {AGE_GROUPS.map(({ id, title, ageRange, iconSrc, path }) => (
          <AgeGroupCard
            key={id}
            title={title}
            ageRange={ageRange}
            iconSrc={iconSrc}
            isSelected={selectedId === id}
            onCardClick={() => handleCardClick(id, path)}
          />
        ))}
      </div>
    </main>
  );
};

export default AgeGroupSelectPage;