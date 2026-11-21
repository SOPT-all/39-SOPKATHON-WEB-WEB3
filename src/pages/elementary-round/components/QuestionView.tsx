import ActionButton from '@/shared/components/ActionButton';
import AnswerButton from '@/shared/components/AnswerButton';
import type { ElementaryQuestion } from '@/shared/types/elementary';

interface QuestionViewProps {
  question: ElementaryQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedChoice: string | null;
  onChoiceClick: (choice: string) => void;
  onSubmitClick: () => void;
}

// ponytail: Figma 하단 버튼 문구가 화면마다 달라(놀이 시작하기/다음 문제 보기) 임시 문구. 디자이너 확인 후 교체
const SUBMIT_LABEL = '확인하기';

const QuestionView = ({
  question,
  questionNumber,
  totalQuestions,
  selectedChoice,
  onChoiceClick,
  onSubmitClick,
}: QuestionViewProps) => {
  return (
    <section className="flex flex-1 flex-col">
      <div className="mt-[43px] flex flex-col gap-3">
        <h2 className="text-headline-lg text-gray-900">{question.sentence}</h2>
        <p className="text-label-tab-m text-[#555b65]">
          문제 {questionNumber} / {totalQuestions}
        </p>
      </div>
      <div className="mt-[34px] flex flex-col gap-3">
        {question.choices.map((choice) => (
          <AnswerButton key={choice} isSelected={choice === selectedChoice} onClick={() => onChoiceClick(choice)}>
            {choice}
          </AnswerButton>
        ))}
      </div>
      <ActionButton className="mt-auto" disabled={!selectedChoice} onClick={onSubmitClick}>
        {SUBMIT_LABEL}
      </ActionButton>
    </section>
  );
};

export default QuestionView;
