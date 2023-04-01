import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: React.ReactNode;
}

export default function TopLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Safehome</title>
        <meta name="description" content="Safehome Web Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopContainer>
          <MainContent>{children}</MainContent>
        </TopContainer>
      </main>
    </>
  );
}
