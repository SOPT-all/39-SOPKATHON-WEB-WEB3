import type { ComponentProps } from 'react';

interface SelectButtonProps extends ComponentProps<'button'> {
  isSelected?: boolean;
}

const SelectButton = ({
  isSelected = false,
  type = 'button',
  className = '',
  children,
  ...props
}: SelectButtonProps) => {
  return (
    <button
      type={type}
      aria-pressed={isSelected}
      className={`flex h-14 w-full items-center justify-center rounded-xl border text-[16px] leading-5.5 font-bold text-gray-700 ${
        isSelected ? 'border-blue-650 bg-blue-100' : 'border-gray-300 bg-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SelectButton;
