interface GameChoiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
  isSelected?: boolean;
  onCardClick?: () => void;
}

// #bababa·#121212·#666, 18/22 Bold·14/17 Regular는 Figma 값. 일치하는 토큰이 없어 그대로 사용
const GameChoiceCard = ({ iconSrc, title, description, isSelected = false, onCardClick }: GameChoiceCardProps) => {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onCardClick}
      className={`flex w-full items-center gap-4 rounded-xl border px-[18px] py-4 text-left ${
        isSelected ? 'border-blue-650 bg-blue-100' : 'border-[#bababa] bg-white'
      }`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center">
        <img src={iconSrc} alt="" />
      </span>
     <span className="flex flex-col">
        <span className="text-headline-sm-sb text-[#121212]">{title}</span>
        <span className="-mt-0.5 text-label-tab-m text-[#666]">{description}</span>
      </span>
    </button>
  );
};

export default GameChoiceCard;
