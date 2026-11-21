import { useNavigate, useSearchParams } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import ImageView from '@/shared/components/ImageView';
import StatusBar from '@/shared/components/StatusBar';
import { MOCK_PRESCHOOL_QUESTIONS } from '@/shared/constants/mockPreschoolQuestions';

const PreschoolGamePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const totalCount = MOCK_PRESCHOOL_QUESTIONS.length;
  const step = Math.min(Math.max(Number(searchParams.get('step')) || 1, 1), totalCount); // 1 ~ 3 사이로 고정
  const currentQuestion = MOCK_PRESCHOOL_QUESTIONS[step - 1];
  const isLastQuestion = step === totalCount;

  const handleFoundClick = () => {
    if (isLastQuestion) {
      navigate(PATH.PRESCHOOL_GAME_FINISH, { replace: true });
      return;
    }
    setSearchParams({ step: String(step + 1) });
  };

  return (
    <main className="flex min-h-dvh flex-col bg-white px-8 pb-8">
      <Header />

      <div className="mt-5">
        <StatusBar currentStep={step} totalSteps={totalCount} />
      </div>

      <div className="mt-10.75 flex flex-col gap-3">
        <h1 className="text-headline-lg whitespace-pre-line text-gray-900">{currentQuestion.text}</h1>
        <p className="text-label-tab-m text-gray-600">
          문제 {step} / {totalCount}
        </p>
      </div>

      <div className="-mx-8 mt-17 px-10.25">
        <ImageView src={currentQuestion.imageUrl} />
      </div>

      <ActionButton className="mt-auto" onClick={handleFoundClick}>
        찾았어요
      </ActionButton>
    </main>
  );
};

export default PreschoolGamePage;
