import React from 'react';
import '../styles/_common.scss';
import '../styles/_constants.scss';
import '../styles/components/NavBar.scss';
import '../styles/components/Footer.scss';
import '../styles/components/HomeBackgroundImage.scss';
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
          }
        `}
      </style>
      <TopLayout>
        <Component {...pageProps} />
      </TopLayout>
    </>
  );
}
