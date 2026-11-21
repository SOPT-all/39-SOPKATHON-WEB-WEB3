import type { ReactNode } from 'react';

interface BottomFixedBarProps {
  children: ReactNode;
}

// 화면 하단에 고정되는 버튼 영역 (높이 98px, 스크롤되는 내용은 이 영역 아래로 가려짐)
// 하단 여백(pb-24.5)
const BottomFixedBar = ({ children }: BottomFixedBarProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-[402px] bg-white px-8 pt-3 pb-8">{children}</div>
  );
};

export default BottomFixedBar;
