import { ReactNode } from 'react';

import Footer from './site-footer';
import Header from './site-header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
