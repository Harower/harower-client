import { tv } from 'tailwind-variants';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className={Layout()}>
      <Outlet />
    </main>
  );
};

const Layout = tv({
  base: 'h-screen',
});

export default AuthLayout;
