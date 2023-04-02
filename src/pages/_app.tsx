import React from 'react';
import '../styles/_common.scss';
import '../styles/_constants.scss';
import '../styles/components/NavBar.scss';
import '../styles/components/Posts.scss';
import '../styles/pages/Home.scss';
import '../styles/components/Elements/Input.scss';
import '../styles/components/Elements/Modal.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import TopLayout from '../components/shared/TopLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            overflow-y: overlay;
            background-color: #18191a;
            color: #e4e6eb;
          }
        `}
      </style>
      <TopLayout>
        <Component {...pageProps} />
      </TopLayout>
    </>
  );
}
