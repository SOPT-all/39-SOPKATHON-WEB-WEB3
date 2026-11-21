import type { ComponentProps } from 'react';

type ActionButtonProps = ComponentProps<'button'>;

const ActionButton = ({ type = 'button', className = '', children, ...props }: ActionButtonProps) => {
  return (
    <button
      type={type}
      className={`flex h-13.5 w-full items-center justify-center rounded-xl bg-gray-900 text-[16px] leading-5.5 font-bold text-white disabled:bg-gray-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
