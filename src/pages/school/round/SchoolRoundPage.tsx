import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { generatePath, Navigate, useNavigate, useParams } from 'react-router';

import FeedbackView from '@/pages/school/round/components/FeedbackView';
import QuestionView from '@/pages/school/round/components/QuestionView';
import { PATH } from '@/routes/paths';
import Alert from '@/shared/components/Alert';
import Header from '@/shared/components/Header';
import StatusBar from '@/shared/components/StatusBar';
import { useSubmitAnswer } from '@/shared/hooks/useSchool';
import type { SchoolAnswer, SchoolRound } from '@/shared/types/school';

const SchoolRoundPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { roundId = '' } = useParams();
  // 놀이 시작(useStartRound)이 캐시에 넣어 둔 회차를 처음 한 번만 읽어 보관 (캐시가 비워져도 풀이 유지)
  const [round] = useState(() => queryClient.getQueryData<SchoolRound>(['rounds', Number(roundId)]));

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | null>(null);
  const [answer, setAnswer] = useState<SchoolAnswer | null>(null);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const { mutate: submitAnswer, isPending: isSubmitting } = useSubmitAnswer();

  // 새로고침·주소 직접 입력 등으로 회차 정보가 없으면 놀이 목록으로
  if (!round) return <Navigate to={PATH.SCHOOL_GAMES} replace />;

  const { questions } = round;
  const question = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const handleSubmitClick = () => {
    if (selectedChoiceId === null) return;
    submitAnswer(
      { roundId: round.roundId, body: { questionId: question.questionId, choiceId: selectedChoiceId } },
      { onSuccess: setAnswer, onError: () => setIsErrorOpen(true) },
    );
  };

  const handleNextClick = () => {
    if (isLastQuestion) {
      navigate(generatePath(PATH.SCHOOL_RESULT, { roundId: String(round.roundId) }));
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setSelectedChoiceId(null);
    setAnswer(null);
  };

  const handleErrorClose = () => setIsErrorOpen(false);

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header />
      <div className="mt-5">
        <StatusBar currentStep={questionIndex + 1} totalSteps={questions.length} />
      </div>
      {answer ? (
        <FeedbackView result={answer} isLastQuestion={isLastQuestion} onNextClick={handleNextClick} />
      ) : (
        <QuestionView
          question={question}
          questionNumber={questionIndex + 1}
          totalQuestions={questions.length}
          selectedChoiceId={selectedChoiceId}
          isSubmitting={isSubmitting}
          onChoiceClick={setSelectedChoiceId}
          onSubmitClick={handleSubmitClick}
        />
      )}
      <Alert
        isOpen={isErrorOpen}
        title="답을 보내지 못했어요"
        description="잠시 후 다시 시도해 주세요."
        buttonText="확인"
        onButtonClick={handleErrorClose}
        onClose={handleErrorClose}
      />
    </main>
  );
};

export default SchoolRoundPage;
