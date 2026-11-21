import type { ComponentProps } from 'react';

const TextField = ({ className = '', ...props }: ComponentProps<'input'>) => {
  return (
    <input
      type="text"
      className={`w-full rounded-xl border border-gray-200 bg-white px-6 py-3 text-body-md-m text-gray-900 caret-blue-650 outline-none placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
};

export default TextField;
