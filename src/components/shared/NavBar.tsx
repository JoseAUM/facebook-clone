import React from 'react';
import styled from 'styled-components';
import FullWidthContainer from './FullWidthContainer';
import Image from 'next/image';
import Link from 'next/link';

const NavComponent = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavItemSegment = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavItemLi = styled.li`
  list-style: none;
  margin: 0 0.5rem;
`;

export default function NavBar() {
  return (
    <>
      <NavComponent>
        <nav>
          <FullWidthContainer color="primary">
            <div className="nav-container">
              <Image src="/logo.png" width={40} height={40} alt="Logo" />
              <NavItemSegment>
                <NavItemLi>
                  <Link href="" passHref>
                    INICIO
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    ACERCA DE
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    PRODUCTOS
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    REPARACIONES
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    COTIZACIÓN
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    CUENTA
                  </Link>
                </NavItemLi>
              </NavItemSegment>
            </div>
          </FullWidthContainer>
        </nav>
      </NavComponent>
    </>
  );
}
