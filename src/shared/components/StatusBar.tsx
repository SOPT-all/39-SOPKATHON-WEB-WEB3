const TOTAL_STEPS = 3;

interface StatusBarProps {
  currentStep: number;
  totalSteps?: number;
}

const StatusBar = ({ currentStep, totalSteps = TOTAL_STEPS }: StatusBarProps) => {
  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep}
      className="flex w-full items-center gap-1.5"
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-1.25 flex-1 rounded-full ${index < currentStep ? 'bg-gray-900' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );
};

export default StatusBar;
