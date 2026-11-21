import { useState } from 'react';

import QuestionView from '@/pages/elementary-round/components/QuestionView';
import Header from '@/shared/components/Header';
import StatusBar from '@/shared/components/StatusBar';
import { MOCK_ELEMENTARY_QUESTIONS } from '@/shared/constants/mockElementaryQuestions';

const ElementaryRoundPage = () => {
  const questions = MOCK_ELEMENTARY_QUESTIONS;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const question = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const handleSubmitClick = () => {
    // TODO(#40): 답변 제출 후 피드백 화면으로 전환. 지금은 바로 다음 문제로 이동
    if (isLastQuestion) return;
    setQuestionIndex((prev) => prev + 1);
    setSelectedChoice(null);
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pt-[66px] pb-8">
      <Header />
      <div className="mt-5">
        <StatusBar currentStep={questionIndex + 1} totalSteps={questions.length} />
      </div>
      <QuestionView
        question={question}
        questionNumber={questionIndex + 1}
        totalQuestions={questions.length}
        selectedChoice={selectedChoice}
        onChoiceClick={setSelectedChoice}
        onSubmitClick={handleSubmitClick}
      />
    </main>
  );
};

export default ElementaryRoundPage;
