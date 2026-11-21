import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import FormSection from '@/pages/preschool/input/components/FormSection';
import RecommendLoading from '@/pages/preschool/input/components/RecommendLoading';
import WaitTimeButton from '@/pages/preschool/input/components/WaitTimeButton';
import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import BottomFixedBar from '@/shared/components/BottomFixedBar';
import Header from '@/shared/components/Header';
import SelectButton from '@/shared/components/SelectButton';
import TextField from '@/shared/components/TextField';

const AGE_OPTIONS = [4, 5, 6, 7];
const WAIT_TIME_OPTIONS = [5, 10, 15, 20, 25, 30];
const LOADING_DURATION = 2000;

const PreschoolInputPage = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [place, setPlace] = useState('');
  const [selectedWaitTime, setSelectedWaitTime] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 로딩 2초 뒤 장소별 추천으로 이동 (뒤로가기로 로딩을 끄면 타이머 취소)
  // TODO: 추천 API 연동 후 API 응답 기준으로 이동
  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => navigate(PATH.PRESCHOOL_GAME_GUIDE), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [isLoading, navigate]);

  // 나이, 장소는 필수 / 대기시간은 선택
  const isSubmittable = selectedAge !== null && place.trim() !== '';

  const handleAgeClick = (age: number) => setSelectedAge(age);

  // 같은 시간을 다시 누르면 선택 해제
  const handleWaitTimeClick = (waitTime: number) => {
    setSelectedWaitTime((prev) => (prev === waitTime ? null : waitTime));
  };

  const handleCompleteClick = () => setIsLoading(true);

  // 로딩 중 뒤로가기 → 입력 화면으로 (입력값 유지)
  const handleLoadingBackClick = () => setIsLoading(false);

  if (isLoading) return <RecommendLoading onBackClick={handleLoadingBackClick} />;

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-24.5">
      <Header hasSymbol />

      <div className="mt-17 flex flex-col gap-3">
        <h2 className="text-headline-lg text-gray-900">아이의 정보를 입력해주세요.</h2>
        <p className="text-body-md-r text-gray-600">
          아이의 정보에 기반한 난이도로 해봄이
          <br />
          학습을 추천해요.
        </p>
      </div>

      <div className="mt-9 mb-10 flex flex-col gap-10">
        <FormSection title="아이의 나이를 선택해주세요.">
          <div className="grid grid-cols-2 gap-3">
            {AGE_OPTIONS.map((age) => (
              <SelectButton key={age} isSelected={selectedAge === age} onClick={() => handleAgeClick(age)}>
                {age}세
              </SelectButton>
            ))}
          </div>
        </FormSection>

        <FormSection title="어떤 상황에 계신가요?">
          <TextField
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="아이와 대기중인 장소를 입력해주세요."
          />
        </FormSection>

        <FormSection title="예상 대기시간을 알려주세요.">
          <div className="grid grid-cols-3 gap-3">
            {WAIT_TIME_OPTIONS.map((waitTime) => (
              <WaitTimeButton
                key={waitTime}
                isSelected={selectedWaitTime === waitTime}
                onClick={() => handleWaitTimeClick(waitTime)}
              >
                {waitTime}분
              </WaitTimeButton>
            ))}
          </div>
        </FormSection>
      </div>

      <BottomFixedBar>
        <ActionButton disabled={!isSubmittable} onClick={handleCompleteClick}>
          완료
        </ActionButton>
      </BottomFixedBar>
    </main>
  );
};

export default PreschoolInputPage;
