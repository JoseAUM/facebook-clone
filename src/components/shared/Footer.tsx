import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FullWidthContainer from './FullWidthContainer';
import Image from 'next/image';

const FooterComponent = styled.div`
  margin-top: auto;
  z-index: 100;
`;

const FooterItemSegment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 2rem;
  width: 25%;
`;

const FooterItemLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;

const BottonFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

export default function Footer() {
  return (
    <FooterComponent>
      <FullWidthContainer color="primary">
        <div className="footer-container">
          <FooterItemSegment className="gray-color">
            <p>SAFEHOME</p>
            <FooterItemLi>Seguridad al alcance de su mano</FooterItemLi>
            <FooterItemLi>
              ¡En SafeHomeCR nos preocupamos por la seguridad de su hogar!
            </FooterItemLi>
          </FooterItemSegment>
          <FooterItemSegment>
            <p>SERVICIOS</p>
            <FooterItemLi>
              <Link href="" passHref>
                Productos
              </Link>
            </FooterItemLi>
            <FooterItemLi>
              <Link href="" passHref>
                Reparaciones
              </Link>
            </FooterItemLi>
            <FooterItemLi>
              <Link href="" passHref>
                Cotización
              </Link>
            </FooterItemLi>
          </FooterItemSegment>
          <FooterItemSegment>
            <p>CONTACTO</p>
            <FooterItemLi>
              <Image
                src="/images/icons/footer/phone.svg"
                alt="mail"
                width={20}
                height={20}
                style={{ marginRight: '.4rem' }}
              />
              <Link href="" passHref>
                Productos
              </Link>
            </FooterItemLi>
            <FooterItemLi>
              <Image
                src="/images/icons/footer/mail.svg"
                alt="mail"
                width={20}
                height={20}
                style={{ marginRight: '.4rem' }}
              />
              <Link href="" passHref>
                Reparaciones
              </Link>
            </FooterItemLi>
            <FooterItemLi>
              <Image
                src="/images/icons/footer/location.svg"
                alt="mail"
                width={20}
                height={20}
                style={{ marginRight: '.4rem' }}
              />
              <Link href="" passHref>
                Cotización
              </Link>
            </FooterItemLi>
          </FooterItemSegment>
        </div>
      </FullWidthContainer>
      <FullWidthContainer color="darker-primary">
        <BottonFooter className="gray-color">
          SafeHomeCR 2023. Todos los derechos reservados
        </BottonFooter>
      </FullWidthContainer>
    </FooterComponent>
  );
}
