import { HTTPError } from 'ky';
import { type ComponentProps, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import FormSection from '@/pages/preschool/input/components/FormSection';
import RecommendLoading from '@/pages/preschool/input/components/RecommendLoading';
import WaitTimeButton from '@/pages/preschool/input/components/WaitTimeButton';
import { PATH } from '@/routes/paths';
import ActionButton from '@/shared/components/ActionButton';
import Alert from '@/shared/components/Alert';
import BottomFixedBar from '@/shared/components/BottomFixedBar';
import Header from '@/shared/components/Header';
import SelectButton from '@/shared/components/SelectButton';
import TextField from '@/shared/components/TextField';
import { usePostPreschoolRecommendation } from '@/shared/hooks/usePreschool';
import { savePreschoolRecommendation } from '@/shared/utils/preschoolStorage';

const AGE_OPTIONS = [4, 5, 6, 7];
const WAIT_TIME_OPTIONS = [5, 10, 15, 20, 25, 30];

type AlertContent = Pick<ComponentProps<typeof Alert>, 'title' | 'description' | 'buttonText'>;

// 422: 장소로 질문을 만들 수 없음 → Figma 디자인 문구
const INVALID_PLACE_STATUS = 422;
const INVALID_PLACE_ALERT: AlertContent = {
  title: '입력한 장소를 확인해 주세요',
  description: '[카페]처럼 정확한 장소의 이름을 작성해주세요.',
  buttonText: '장소 다시 입력하기',
};

// 시간 초과, 네트워크 오류처럼 서버 응답(메시지)이 없을 때
const DEFAULT_ERROR_MESSAGE = '일시적인 문제로 놀이를 만들지 못했어요. 잠시 후 다시 시도해 주세요.';

// 422 → Figma 알림 / 그 외 → 서버가 보낸 message를 그대로 표시
const getErrorAlert = (error: Error): AlertContent => {
  if (!(error instanceof HTTPError)) return { title: DEFAULT_ERROR_MESSAGE, buttonText: '확인' };
  if (error.response.status === INVALID_PLACE_STATUS) return INVALID_PLACE_ALERT;

  const { data } = error;
  const message = typeof data === 'object' && data !== null && 'message' in data ? String(data.message) : '';
  return { title: message || DEFAULT_ERROR_MESSAGE, buttonText: '확인' };
};

const PreschoolInputPage = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [place, setPlace] = useState('');
  const [selectedWaitTime, setSelectedWaitTime] = useState<number | null>(null);
  const [errorAlert, setErrorAlert] = useState<AlertContent | null>(null);
  const { mutate: postRecommendation, isPending, reset } = usePostPreschoolRecommendation();

  // 로딩 중 뒤로가기로 취소한 요청의 응답은 무시하기 위한 요청 번호
  const requestIdRef = useRef(0);

  // 나이, 장소는 필수 / 대기시간은 선택
  const isSubmittable = selectedAge !== null && place.trim() !== '';

  const handleAgeClick = (age: number) => setSelectedAge(age);

  // 같은 시간을 다시 누르면 선택 해제
  const handleWaitTimeClick = (waitTime: number) => {
    setSelectedWaitTime((prev) => (prev === waitTime ? null : waitTime));
  };

  const handleCompleteClick = () => {
    if (selectedAge === null) return;

    const requestId = ++requestIdRef.current;
    postRecommendation(
      {
        age: selectedAge,
        placeName: place.trim(),
        ...(selectedWaitTime !== null && { waitingMinutes: selectedWaitTime }),
      },
      {
        onSuccess: (recommendation) => {
          if (requestId !== requestIdRef.current) return;
          savePreschoolRecommendation(recommendation);
          navigate(PATH.PRESCHOOL_GAME_GUIDE);
        },
        onError: (error) => {
          if (requestId !== requestIdRef.current) return;
          setErrorAlert(getErrorAlert(error));
        },
      },
    );
  };

  // 로딩 중 뒤로가기 -> 요청 결과를 무시하고 입력 화면으로 (입력값 유지)
  const handleLoadingBackClick = () => {
    requestIdRef.current += 1;
    reset();
  };

  const handleErrorAlertClose = () => setErrorAlert(null);

  if (isPending) return <RecommendLoading onBackClick={handleLoadingBackClick} />;

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

      <Alert
        isOpen={errorAlert !== null}
        title={errorAlert?.title ?? ''}
        description={errorAlert?.description}
        buttonText={errorAlert?.buttonText ?? ''}
        onButtonClick={handleErrorAlertClose}
        onClose={handleErrorAlertClose}
      />
    </main>
  );
};

export default PreschoolInputPage;
