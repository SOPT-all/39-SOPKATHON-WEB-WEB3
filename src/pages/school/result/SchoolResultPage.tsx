import { Fragment } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/routes/paths';
import iconCharacterPair from '@/shared/assets/icon-character-pair.svg';
import ActionButton from '@/shared/components/ActionButton';
import Header from '@/shared/components/Header';
import { MOCK_SCHOOL_RESULT } from '@/shared/constants/mockSchoolResult';

const SchoolResultPage = () => {
  const navigate = useNavigate();
  // TODO: 회차 결과 API(GET /school/rounds/{roundId}/result) 응답으로 교체
  const result = MOCK_SCHOOL_RESULT;

  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header title="게임 요약" />
      <h2 className="mt-17 text-headline-lg text-black">오늘 완성한 문장</h2>
      <div className="mt-4 flex items-center justify-between gap-[22px] rounded-xl bg-blue-100 px-7.25 py-2.5">
        <p className="text-body-md-m text-gray-700">
          {result.totalCount}문제를 풀고 {result.correctCount}문제를 맞혔어요
        </p>
        <img src={iconCharacterPair} alt="" className="shrink-0" />
      </div>
      <ul className="mt-[46px] flex flex-col gap-3.5">
        {result.questions.map(({ questionNumber, isCorrect, completedSentence }, index) => (
          <Fragment key={questionNumber}>
            {/* Figma 구분선은 높이 0이라 자리를 차지하지 않음 → -mb-px로 1px 상쇄 */}
            {index > 0 && <li aria-hidden className="mx-[6.25px] -mb-px border-t border-gray-200" />}
            <li className="flex flex-col">
              <p
                className={`flex h-7.5 items-center text-body-md-m ${isCorrect ? 'text-blue-650' : 'text-accent-red'}`}
              >
                {questionNumber}번 · {isCorrect ? '맞혔어요' : '다시 살펴봐요'}
              </p>
              <p className="text-headline-md-sb text-gray-700">{completedSentence}</p>
            </li>
          </Fragment>
        ))}
      </ul>
      <div className="mt-auto flex flex-col items-center gap-0.5">
        <button
          type="button"
          onClick={() => navigate(PATH.SCHOOL_GAMES)}
          className="h-13.5 p-2.5 text-body-md-m text-gray-500"
        >
          놀이 목록으로
        </button>
        <ActionButton onClick={() => navigate(PATH.HOME)}>처음으로</ActionButton>
      </div>
    </main>
  );
};

export default SchoolResultPage;
