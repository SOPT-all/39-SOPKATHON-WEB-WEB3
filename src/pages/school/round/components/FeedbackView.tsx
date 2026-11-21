import ActionButton from '@/shared/components/ActionButton';
import OptionCard from '@/shared/components/OptionCard';
import type { SchoolAnswerResult } from '@/shared/types/school';

interface FeedbackViewProps {
  result: SchoolAnswerResult;
  selectedChoice: string;
  isLastQuestion: boolean;
  onNextClick: () => void;
}

const FeedbackView = ({ result, selectedChoice, isLastQuestion, onNextClick }: FeedbackViewProps) => {
  return (
    <section className="flex flex-1 flex-col">
      <h2 className="mt-[43px] text-headline-lg text-black">{result.completedSentence}</h2>
      <p className="mt-[30px] flex items-center gap-1.5">
        <span className="text-body-md-m text-gray-500">내가 고른 말</span>
        <span className="text-headline-md-sb text-gray-700">{selectedChoice}</span>
      </p>
      <div className="mt-3">
        <OptionCard
          title={result.isCorrect ? '정답이에요!' : '이렇게 말해요'}
          description={result.explanation}
          variant={result.isCorrect ? 'correct' : 'wrong'}
        />
      </div>
      <ActionButton className="mt-auto" onClick={onNextClick}>
        {isLastQuestion ? '결과 보기' : '다음 문제 보기'}
      </ActionButton>
    </section>
  );
};

export default FeedbackView;
