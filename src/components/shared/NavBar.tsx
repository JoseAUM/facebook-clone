import React from 'react';
import styled from 'styled-components';
import FullWidthContainer from './FullWidthContainer';
import Image from 'next/image';
import Link from 'next/link';
import Input from './Elements/Input';

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
              <div className="search-bar">
                <Image
                  src="/favicon.ico"
                  width={40}
                  height={40}
                  alt="Facebook logo"
                />
                <Input type="search" placeholder="Search Facebook-Clone" />
              </div>
              <>
              <NavItemSegment className='main-nav-icons'>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/home-focus.svg"
                      alt="home"
                      width={30}
                      height={30}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/friends.svg"
                      alt="home"
                      width={30}
                      height={30}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/video.svg"
                      alt="home"
                      width={30}
                      height={30}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/marketplace.svg"
                      alt="home"
                      width={30}
                      height={30}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/groups.svg"
                      alt="home"
                      width={30}
                      height={30}
                    />
                  </Link>
                </NavItemLi>
              </NavItemSegment>
              </>
              <>
              <NavItemSegment>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/alerts/apps.svg"
                      alt="home"
                      width={40}
                      height={40}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/alerts/messages.svg"
                      alt="home"
                      width={40}
                      height={40}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/images/components/navbar/alerts/notifications.svg"
                      alt="home"
                      width={40}
                      height={40}
                    />
                  </Link>
                </NavItemLi>
                <NavItemLi>
                  <Link href="" passHref>
                    <Image
                      src="/dog.svg"
                      alt="home"
                      width={40}
                      height={40}
                    />
                  </Link>
                </NavItemLi>
              </NavItemSegment>
              </>
            </div>
          </FullWidthContainer>
        </nav>
      </NavComponent>
    </>
  );
}
