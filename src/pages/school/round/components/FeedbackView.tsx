import ActionButton from '@/shared/components/ActionButton';
import OptionCard from '@/shared/components/OptionCard';
import type { SchoolAnswer } from '@/shared/types/school';

interface FeedbackViewProps {
  result: SchoolAnswer;
  isLastQuestion: boolean;
  onNextClick: () => void;
}

const FeedbackView = ({ result, isLastQuestion, onNextClick }: FeedbackViewProps) => {
  return (
    <section className="flex flex-1 flex-col">
      <h2 className="mt-[43px] text-headline-lg text-black">{result.correctAnswer}</h2>
      <p className="mt-[30px] flex items-center gap-1.5">
        <span className="text-body-md-m text-gray-500">내가 고른 말</span>
        <span className="text-headline-md-sb text-gray-700">{result.selectedChoice.text}</span>
      </p>
      <div className="mt-3">
        <OptionCard
          title={result.correct ? '정답이에요!' : '이렇게 말해요'}
          description={result.feedback}
          variant={result.correct ? 'correct' : 'wrong'}
        />
      </div>
      <ActionButton className="mt-auto" onClick={onNextClick}>
        {isLastQuestion ? '결과 보기' : '다음 문제 보기'}
      </ActionButton>
    </section>
  );
};

export default FeedbackView;
