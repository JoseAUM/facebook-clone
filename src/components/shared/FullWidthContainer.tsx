import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
  backgroundImage?: string;
}

const Container = styled.div`
  position: relative;
`;

const BackgroundEffect = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export default function FullWidthContainer({
  children,
  color,
  backgroundImage,
}: Props) {
  return (
    <Container>
      <div>{children}</div>
      {color && <div className={color && `${color}-full-bg`} />}
      {backgroundImage && (
        <div className={`${backgroundImage}-image-full-bg`}>
          <BackgroundEffect />
        </div>
      )}
    </Container>
  );
}
