import iconCharacterBlue from '@/shared/assets/icon-character-blue.svg';
import iconCharacterYellow from '@/shared/assets/icon-character-yellow.svg';

interface GameContextBoxProps {
  question: string;
  answer: string;
}

const BUBBLE_BASE = 'flex min-h-[42px] items-center justify-center rounded-[20px] text-body-md-sb text-gray-700';
const QUESTION_BUBBLE = `${BUBBLE_BASE} min-w-0 rounded-br-[4px] bg-gray-100 px-8 py-[7px] text-center text-balance`;
const ANSWER_BUBBLE = `${BUBBLE_BASE} rounded-bl-[4px] bg-blue-200 px-5 py-2.5`;

// 노랑 줄이 먼저 올라오고, 1.2초 뒤 파랑 줄이 올라옴 (동작 줄이기 설정이면 바로 표시)
const GameContextBox = ({ question, answer }: GameContextBoxProps) => {
  return (
    <div className="flex w-full flex-col gap-10.5">
      <div className="flex items-end justify-end gap-4 motion-safe:animate-slide-up">
        <p className={QUESTION_BUBBLE}>{question}</p>
        <img src={iconCharacterYellow} alt="" className="shrink-0" />
      </div>
      <div className="flex items-start gap-4 motion-safe:animate-slide-up motion-safe:[animation-delay:1.2s]">
        <img src={iconCharacterBlue} alt="" className="shrink-0 -scale-x-100" />
        <div className="mt-7 flex min-w-0 flex-1 flex-col items-start gap-2">
          <p className={ANSWER_BUBBLE}>정답!</p>
          <p className={ANSWER_BUBBLE}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default GameContextBox;
