import Header from '@/shared/components/Header';

// TODO(희수): 활동 요약 화면 구현. 회차 결과 API(GET /school/rounds/{roundId}/result) 사용
const ElementaryResultPage = () => {
  return (
    <main className="flex min-h-dvh flex-col px-8 pb-8">
      <Header title="활동 요약" />
    </main>
  );
};

export default ElementaryResultPage;
