import { useNavigate } from 'react-router';

import iconLogoSymbol from '@/shared/assets/icon-logo-symbol.svg';
import iconLogoTypo from '@/shared/assets/icon-logo-typo.svg';

interface HeaderProps {
  title?: string;
  hasSymbol?: boolean;
  onBackClick?: () => void;
}

const Header = ({ title, hasSymbol = false, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }
    navigate(-1);
  };

  return (
    <header className="flex w-full items-center justify-between">
      {title ? (
        <h1 className="text-headline-lg-paperlogy text-black">{title}</h1>
      ) : (
        <div className="flex items-center gap-2">
          {hasSymbol && <img src={iconLogoSymbol} alt="" />}
          <div className="flex h-8 w-12 items-center justify-center">
            <img src={iconLogoTypo} alt="해봄" />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleBackClick}
        className="flex size-8 items-center justify-center text-body-md-m text-gray-600"
      >
        뒤로
      </button>
    </header>
  );
};

export default Header;
