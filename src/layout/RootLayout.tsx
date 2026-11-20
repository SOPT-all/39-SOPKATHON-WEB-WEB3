import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="min-h-dvh">
      <Outlet />
    </div>
  );
};

export default RootLayout;
