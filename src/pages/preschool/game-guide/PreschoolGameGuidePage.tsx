import { Navigate, useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import iconPreschoolGameBlue from '@/shared/assets/icon-preschool-game-blue.svg';
import iconPreschoolGameYellow from '@/shared/assets/icon-preschool-game-yellow.svg';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import OptionCard from '@/shared/components/OptionCard';
import { getPreschoolRecommendation } from '@/shared/utils/preschoolStorage';

const GAME_GUIDE = {
  title: '주변 물건 찾기',
  description: '아이와 함께 주변을 둘러보세요.\n해당하는 물건을 찾았다면 ‘찾았어요’를 눌러 주세요.',
};

const PreschoolGameGuidePage = () => {
  const navigate = useNavigate();
  const recommendation = getPreschoolRecommendation();

  // 추천 결과 없이 들어오면 입력 화면으로
  if (!recommendation) return <Navigate to={PATH.PRESCHOOL_INPUT} replace />;

  const handleStartClick = () => {
    navigate(PATH.PRESCHOOL_GAME);
  };

  return (
    <main className="flex min-h-dvh flex-col bg-white px-8">
      <Header />

      <h2 className="mt-17 text-headline-lg text-gray-900">{recommendation.placeName}에서 해볼 놀이</h2>

      <div className="mt-4">
        <OptionCard title={GAME_GUIDE.title} description={GAME_GUIDE.description} />
      </div>
      <div className="-mx-8 mt-18.25 pr-19.5 pl-15" aria-hidden="true">
        <div className="relative aspect-[264/207] w-full">
          <img src={iconPreschoolGameBlue} alt="" className="absolute top-0 left-0 w-[56.4%]" />
          <img src={iconPreschoolGameYellow} alt="" className="absolute right-0 bottom-0 w-[42.4%]" />
        </div>
      </div>
      <div className="sticky bottom-0 -mx-8 mt-auto bg-white px-8 pt-3 pb-8">
        <ActionButton onClick={handleStartClick}>놀이 시작하기</ActionButton>
      </div>
    </main>
  );
};

export default PreschoolGameGuidePage;
