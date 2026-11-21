interface AgeGroupCardProps {
  title: string;
  ageRange: string;
  iconSrc: string;
  isSelected?: boolean;
  onCardClick?: () => void;
}

const AgeGroupCard = ({ title, ageRange, iconSrc, isSelected = false, onCardClick }: AgeGroupCardProps) => {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onCardClick}
      className={`flex h-55 w-full flex-col items-start rounded-xl border px-6 pt-5 pb-10 text-left ${
        isSelected ? 'border-blue-650 bg-blue-100' : 'border-gray-300 bg-white'
      }`}
    >
      <span className="text-headline-md-sb text-gray-900">{title}</span>
      <span className="text-label-tab-m text-gray-500">{ageRange}</span>
      <img src={iconSrc} alt="" className="mt-auto size-20 self-center" />
    </button>
  );
};

export default AgeGroupCard;
