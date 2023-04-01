import React from 'react';
import FullWidthContainer from './FullWidthContainer';
import styled from 'styled-components';

const BackgroundSize = styled.div`
  height: 65rem;
`;

export default function HomeBackgroundImage() {
  return (
    <FullWidthContainer backgroundImage="home">
      <BackgroundSize>
        <div className="home-background-image-content">
          <h1>¡Seguridad al alcance de su mano!</h1>
          <p>Tu mejor opción para seguridad e instalación de camaras</p>
        </div>
      </BackgroundSize>
    </FullWidthContainer>
  );
}
