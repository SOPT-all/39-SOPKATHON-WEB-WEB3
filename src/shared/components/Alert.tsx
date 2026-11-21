import { useEffect, useRef } from 'react';

interface AlertProps {
  isOpen: boolean;
  title: string;
  description?: string; // 제목 아래 회색 설명
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
      className="m-auto w-[calc(100%-48px)] max-w-88.5 rounded-[20px] bg-white p-5.5 backdrop:bg-black/50"
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-1 py-0.5">
          <h2 className="text-headline-md-sb text-gray-900">{title}</h2>
          {description && <p className="text-body-md-m text-gray-500">{description}</p>}
        </div>
        <button
          type="button"
          onClick={onButtonClick}
          className="flex w-full items-center justify-center rounded-xl bg-gray-900 p-2.5 text-headline-sm-sb text-white"
        >
          {buttonText}
        </button>
      </div>
    </dialog>
  );
};

export default Alert;
