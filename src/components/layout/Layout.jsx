import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../ui';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
