import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import ImageView from '@/shared/components/ImageView';
import { MOCK_PRESCHOOL_QUESTIONS } from '@/shared/constants/mockPreschoolQuestions';

const PreschoolGameFinishPage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalCount = MOCK_PRESCHOOL_QUESTIONS.length;

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    setActiveIndex(Math.round(slider.scrollLeft / slider.clientWidth));
  };

  const handleDotClick = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: index * slider.clientWidth, behavior: 'smooth' });
  };

  const handleRestartClick = () => {
    navigate(PATH.HOME, { replace: true });
  };

  const handleBackClick = () => {
    navigate(`${PATH.PRESCHOOL_GAME}?step=${totalCount}`, { replace: true });
  };

  return (
    <main className="flex min-h-dvh flex-col bg-white px-8">
      <Header title="놀이 마무리" onBackClick={handleBackClick} />

      <div className="mt-17 flex flex-col gap-1">
        <h2 className="text-headline-lg text-black">오늘 찾은 물건</h2>
        <p className="text-label-tab-m text-gray-600">
          문제 {activeIndex + 1} / {totalCount}
        </p>
      </div>

      <div
        ref={sliderRef}
        onScroll={handleSliderScroll}
        className="-mx-8 mt-28 flex snap-x snap-mandatory scrollbar-none overflow-x-auto [&::-webkit-scrollbar]:hidden"
      >
        {MOCK_PRESCHOOL_QUESTIONS.map(({ imageUrl }, index) => (
          <div key={index} className="w-full shrink-0 snap-center px-10.25">
            <ImageView src={imageUrl} />
          </div>
        ))}
      </div>

      <div className="mt-auto mb-11 flex justify-center gap-2">
        {MOCK_PRESCHOOL_QUESTIONS.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${index + 1}번째 물건 보기`}
            aria-current={activeIndex === index}
            onClick={() => handleDotClick(index)}
            className={`size-2 rounded-full ${activeIndex === index ? 'bg-blue-650' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      <div className="sticky bottom-0 -mx-8 bg-white px-8 pt-3 pb-8">
        <ActionButton onClick={handleRestartClick}>처음으로</ActionButton>
      </div>
    </main>
  );
};

export default PreschoolGameFinishPage;
