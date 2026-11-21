import iconLoadingCharacterBlue from '@/shared/assets/icon-loading-character-blue.svg';
import iconLoadingCharacterYellow from '@/shared/assets/icon-loading-character-yellow.svg';
import Header from '@/shared/components/Header';

interface RecommendLoadingProps {
  onBackClick: () => void;
}

// 놀이 추천 중 로딩 화면
const RecommendLoading = ({ onBackClick }: RecommendLoadingProps) => {
  return (
    <main className="flex min-h-dvh flex-col px-8 pt-3 pb-8">
      <Header onBackClick={onBackClick} />

      <div role="status" className="flex flex-1 flex-col items-center justify-center gap-12">
        <div className="relative h-22 w-33" aria-hidden="true">
          <img
            src={iconLoadingCharacterYellow}
            alt=""
            className="absolute top-0 left-0 size-22 animate-bounce-yellow motion-reduce:animate-none"
          />
          <img
            src={iconLoadingCharacterBlue}
            alt=""
            className="absolute top-0 left-11 size-22 animate-bounce-blue motion-reduce:animate-none"
          />
        </div>
        <p className="text-headline-lg text-gray-900">꼼지락꼼지락...</p>
      </div>
    </main>
  );
};

export default RecommendLoading;
