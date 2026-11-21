import type { ComponentProps } from 'react';

interface WaitTimeButtonProps extends ComponentProps<'button'> {
  isSelected?: boolean; // 선택되면 파란 배경, 테두리
}

// 예상 대기시간 선택 칩 버튼
const WaitTimeButton = ({
  isSelected = false,
  type = 'button',
  className = '',
  children,
  ...props
}: WaitTimeButtonProps) => {
  return (
    <button
      type={type}
      aria-pressed={isSelected}
      className={`flex h-13.5 w-full items-center justify-center rounded-xl border text-[16px] leading-normal font-bold text-gray-900 ${
        isSelected ? 'border-blue-650 bg-blue-100' : 'border-gray-300 bg-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default WaitTimeButton;
