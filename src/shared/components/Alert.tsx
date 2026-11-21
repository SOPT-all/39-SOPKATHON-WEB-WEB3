import { useEffect, useRef } from 'react';

interface AlertProps {
  isOpen: boolean;
  title: string;
  description?: string; // 제목 아래 설명
  buttonText: string;
  onButtonClick: () => void;
  onClose: () => void;
}

// 화면 가운데 뜨는 알림 모달
const Alert = ({ isOpen, title, description, buttonText, onButtonClick, onClose }: AlertProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // isOpen에 맞춰 모달 열고 닫기
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto w-[calc(100%-56px)] max-w-86.5 rounded-xl bg-white px-4.75 pt-8.25 pb-6 backdrop:bg-black/80"
    >
      <div className="flex flex-col gap-6.25">
        <div className="flex flex-col gap-1 text-center text-gray-900">
          <h2 className="text-headline-md-sb">{title}</h2>
          {description && <p className="text-body-md-r">{description}</p>}
        </div>
        <button
          type="button"
          onClick={onButtonClick}
          className="flex h-13.5 w-full items-center justify-center rounded-xl bg-accent-red text-body-md-sb text-white"
        >
          {buttonText}
        </button>
      </div>
    </dialog>
  );
};

export default Alert;
