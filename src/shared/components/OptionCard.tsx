type OptionCardVariant = 'default' | 'correct' | 'wrong';

interface OptionCardProps {
  title: string;
  description: string;
  variant?: OptionCardVariant;
}

const TITLE_STYLE: Record<OptionCardVariant, string> = {
  default: 'text-body-md-sb text-gray-800',
  correct: 'text-headline-md-sb text-blue-650',
  wrong: 'text-headline-md-sb text-accent-red',
};

const OptionCard = ({ title, description, variant = 'default' }: OptionCardProps) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-xl bg-gray-100 px-[18px] py-5">
      <p className={TITLE_STYLE[variant]}>{title}</p>
      <p className="text-label-tab-m whitespace-pre-line text-gray-600">{description}</p>
    </div>
  );
};

export default OptionCard;
