import { Navigate, useNavigate, useSearchParams } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import ImageView from '@/shared/components/ImageView';
import StatusBar from '@/shared/components/StatusBar';
import { getPreschoolRecommendation } from '@/shared/utils/preschoolStorage';

const PreschoolGamePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const questions = getPreschoolRecommendation()?.questions ?? [];

  // 추천 결과 없이 들어오면 입력 화면으로
  if (questions.length === 0) return <Navigate to={PATH.PRESCHOOL_INPUT} replace />;

  const totalCount = questions.length;
  const step = Math.min(Math.max(Number(searchParams.get('step')) || 1, 1), totalCount); // 1 ~ 3 사이로 고정
  const currentQuestion = questions[step - 1];
  const isLastQuestion = step === totalCount;

  const handleFoundClick = () => {
    if (isLastQuestion) {
      navigate(PATH.PRESCHOOL_GAME_FINISH, { replace: true });
      return;
    }
    setSearchParams({ step: String(step + 1) });
  };

  return (
    <main className="flex h-dvh flex-col bg-white px-8 pb-8">
      <Header />

      <div className="mt-5">
        <StatusBar currentStep={step} totalSteps={totalCount} />
      </div>

      <div className="mt-10.75 flex min-h-26 flex-col gap-3">
        <h2 className="text-headline-lg whitespace-pre-line text-gray-900">{currentQuestion.text}</h2>
        <p className="text-label-tab-m text-gray-600">
          문제 {step} / {totalCount}
        </p>
      </div>

      {/* 남은 높이를 차지하고, 그 안에서 폭·높이 중 작은 쪽에 맞춰 1:1 */}
      <div className="[container-type:size] -mx-8 mt-17 mb-6 flex min-h-0 flex-1 justify-center px-10.25">
        <div className="size-[min(100cqw,100cqh)]">
          <ImageView src={currentQuestion.imageUrl} />
        </div>
      </div>

      <ActionButton onClick={handleFoundClick}>찾았어요</ActionButton>
    </main>
  );
};

export default PreschoolGamePage;
