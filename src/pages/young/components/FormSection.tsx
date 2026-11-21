import type { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

// 섹션 제목 + 입력 영역 묶음
const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-headline-md-sb text-gray-900">{title}</h3>
      {children}
    </section>
  );
};

export default FormSection;
