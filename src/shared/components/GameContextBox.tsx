import { useEffect, useState } from 'react';

import iconCharacterBlue from '@/shared/assets/icon-character-blue.svg';
import iconCharacterYellow from '@/shared/assets/icon-character-yellow.svg';

interface GameContextBoxProps {
  question: string;
  answer: string;
}

// ponytail: Figma는 질문 → 답 두 장면만 있고 시간 정보가 없어 1초로 둠. 디자이너 확인 후 조정
const ANSWER_DELAY_MS = 1000;

const BUBBLE_BASE = 'flex min-h-[42px] items-center justify-center rounded-[20px] border text-body-md-sb text-gray-700';
const QUESTION_BUBBLE = `${BUBBLE_BASE} min-w-[208px] rounded-br-[4px] border-gray-500 bg-gray-50 px-8 py-[7px]`;
const ANSWER_BUBBLE = `${BUBBLE_BASE} rounded-bl-[4px] border-blue-650 bg-blue-100 px-5 py-2`;

const GameContextBox = ({ question, answer }: GameContextBoxProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnswerVisible(true), ANSWER_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col gap-10.5">
      <div className="flex items-end gap-4 pl-[17px]">
        <p className={QUESTION_BUBBLE}>{question}</p>
        <img src={iconCharacterYellow} alt="" className="shrink-0" />
      </div>
      <div className={`flex items-start gap-4 pl-[23px] ${isAnswerVisible ? '' : 'invisible'}`}>
        <img src={iconCharacterBlue} alt="" className="shrink-0 -scale-x-100" />
        <div className="mt-7 flex flex-col items-start gap-2">
          <p className={ANSWER_BUBBLE}>정답!</p>
          <p className={`${ANSWER_BUBBLE} min-w-[207px]`}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default GameContextBox;
