import { FC } from 'react';
import Head from 'next/head';
import { Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ title = 'cookieMaster', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <Sidebar />
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
