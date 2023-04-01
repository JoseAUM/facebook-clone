import Footer from '../components/shared/Footer';
import React from 'react';
import NavBar from '../components/shared/NavBar';
import HomeBackgroundImage from '../components/shared/HomeBackgroundImage';
import FullWidthContainer from '../components/shared/FullWidthContainer';
import styled from 'styled-components';

const Section = styled.section`
  margin: 6rem 0;
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeBackgroundImage />
      <FullWidthContainer color="secondary">
        <Section />
      </FullWidthContainer>
      <Section />
      <FullWidthContainer color="semi-white">
        <Section />
      </FullWidthContainer>
      <Footer />
    </>
  );
}
