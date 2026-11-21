import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[402px]">
      <Outlet />
    </div>
  );
};

export default RootLayout;
