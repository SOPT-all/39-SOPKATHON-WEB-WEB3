import { useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router';

import FeedbackView from '@/pages/school/round/components/FeedbackView';
import QuestionView from '@/pages/school/round/components/QuestionView';
import { PATH } from '@/routes/paths';
import Header from '@/shared/components/Header';
import StatusBar from '@/shared/components/StatusBar';
import { getMockAnswerResult } from '@/shared/constants/mockSchoolAnswers';
import { MOCK_SCHOOL_QUESTIONS } from '@/shared/constants/mockSchoolQuestions';
import type { SchoolAnswerResult } from '@/shared/types/school';

const SchoolRoundPage = () => {
  const navigate = useNavigate();
  const { roundId = '' } = useParams();
  const questions = MOCK_SCHOOL_QUESTIONS;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [answerResult, setAnswerResult] = useState<SchoolAnswerResult | null>(null);

  const question = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const handleSubmitClick = () => {
    if (!selectedChoice) return;
    // TODO: 답변 제출 API(POST /school/rounds/{roundId}/answers) 응답으로 교체
    setAnswerResult(getMockAnswerResult(question.questionId, selectedChoice));
  };

  const handleNextClick = () => {
    if (isLastQuestion) {
      navigate(generatePath(PATH.SCHOOL_RESULT, { roundId }));
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setSelectedChoice(null);
    setAnswerResult(null);
  };

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header />
      <div className="mt-5">
        <StatusBar currentStep={questionIndex + 1} totalSteps={questions.length} />
      </div>
      {answerResult && selectedChoice ? (
        <FeedbackView
          result={answerResult}
          selectedChoice={selectedChoice}
          isLastQuestion={isLastQuestion}
          onNextClick={handleNextClick}
        />
      ) : (
        <QuestionView
          question={question}
          questionNumber={questionIndex + 1}
          totalQuestions={questions.length}
          selectedChoice={selectedChoice}
          onChoiceClick={setSelectedChoice}
          onSubmitClick={handleSubmitClick}
        />
      )}
    </main>
  );
};

export default SchoolRoundPage;
