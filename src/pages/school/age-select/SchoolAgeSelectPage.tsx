import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import AnswerButton from '@/shared/components/AnswerButton';
import Header from '@/shared/components/Header';

const AGE_OPTIONS = [8, 9, 10];

const SchoolAgeSelectPage = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const handleAgeClick = (age: number) => setSelectedAge(age);

  // TODO: 나이 입력 API 연동 시 선택한 나이 전송
  const handleCompleteClick = () => navigate(PATH.SCHOOL_GAMES);

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header hasSymbol />

      <h2 className="mt-17 text-headline-lg text-gray-900">나이를 선택해주세요.</h2>

      <div className="mt-16.5 flex flex-col gap-2.5">
        {AGE_OPTIONS.map((age) => (
          <AnswerButton key={age} isSelected={selectedAge === age} onClick={() => handleAgeClick(age)}>
            {age}세
          </AnswerButton>
        ))}
      </div>

      <ActionButton className="mt-auto" disabled={selectedAge === null} onClick={handleCompleteClick}>
        완료
      </ActionButton>
    </main>
  );
};

export default SchoolAgeSelectPage;
