import iconCharacterBlue from '@/shared/assets/icon-character-blue.svg';
import iconCharacterYellow from '@/shared/assets/icon-character-yellow.svg';

interface GameContextBoxProps {
  question: string;
  answer: string;
}

const BUBBLE_BASE = 'flex min-h-[42px] items-center justify-center rounded-[20px] border text-body-md-sb text-gray-700';
const QUESTION_BUBBLE = `${BUBBLE_BASE} min-w-[208px] rounded-br-[4px] border-gray-500 bg-gray-50 px-8 py-[7px]`;
const ANSWER_BUBBLE = `${BUBBLE_BASE} rounded-bl-[4px] border-blue-650 bg-blue-100 px-5 py-2`;

const GameContextBox = ({ question, answer }: GameContextBoxProps) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-end gap-4 pl-[17px]">
        <p className={QUESTION_BUBBLE}>{question}</p>
        <img src={iconCharacterYellow} alt="" className="shrink-0 motion-safe:animate-bounce-twice" />
      </div>
      <div className="flex items-start gap-4 pl-[23px]">
        <img src={iconCharacterBlue} alt="" className="shrink-0 -scale-x-100 motion-safe:animate-bounce-twice" />
        <div className="mt-7 flex flex-col items-start gap-2">
          <p className={ANSWER_BUBBLE}>정답!</p>
          <p className={`${ANSWER_BUBBLE} min-w-[207px]`}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default GameContextBox;
