import type { ComponentProps } from 'react';

interface AnswerButtonProps extends ComponentProps<'button'> {
  isSelected?: boolean;
}

const AnswerButton = ({
  isSelected = false,
  type = 'button',
  className = '',
  children,
  ...props
}: AnswerButtonProps) => {
  return (
    <button
      type={type}
      aria-pressed={isSelected}
      className={`flex h-15 w-full items-center justify-center rounded-xl border p-2.5 text-[18px] leading-normal font-bold text-gray-900 ${
        isSelected ? 'border-blue-650 bg-blue-100' : 'border-gray-400 bg-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnswerButton;
