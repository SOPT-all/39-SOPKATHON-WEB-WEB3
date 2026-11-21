import { useState } from 'react';

import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import SelectButton from '@/shared/components/SelectButton';

const AGE_OPTIONS = [8, 9, 10, 11, 12, 13];

const ElementaryAgeSelectPage = () => {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const handleAgeClick = (age: number) => setSelectedAge(age);

  const handleCompleteClick = () => {};

  return (
    <main className="flex min-h-dvh flex-col px-8 pt-3 pb-8">
      <Header hasSymbol />

      <h2 className="mt-17 text-headline-lg text-gray-900">나이를 선택해주세요.</h2>

      <div className="mt-16.5 grid grid-cols-2 gap-3">
        {AGE_OPTIONS.map((age) => (
          <SelectButton key={age} isSelected={selectedAge === age} onClick={() => handleAgeClick(age)}>
            {age}세
          </SelectButton>
        ))}
      </div>

      <ActionButton className="mt-auto" disabled={selectedAge === null} onClick={handleCompleteClick}>
        완료
      </ActionButton>
    </main>
  );
};

export default ElementaryAgeSelectPage;
