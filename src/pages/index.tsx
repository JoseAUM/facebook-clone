import React from 'react';
import NavBar from '../components/shared/NavBar';
import styled from 'styled-components';
import Posts from '../components/shared/Posts';

const Section = styled.section`
  margin: 1rem 0;
`;

export default function Home() {
  const userPoster = {
    firstName: 'Jose',
    lastName: 'Ulloa',
    profilePic: '/dog.svg',
  };
  const post = {
    content:
      'Hola este es mi primer post. Un gusto conocerlos a todos es toy en busca de amig hot.Hola este es mi primer post. Un gusto conocerlos a todos es toy en busca de amig hot.Hola este es mi primer post. Un gusto conocerlos a todos es toy en busca de amig hot.Hola este es mi primer post. Un gusto conocerlos a todos es toy en busca de amig hot.',
    date: '26 de abril',
    visibility: 'public',
  };
  const post2 = {
    content:
      'Hola este',
    date: '26 de abril',
    visibility: 'public',
  };
  return (
    <>
      <NavBar />
      <Section className="Home">
        <div className="main-content">
          <Posts postType="text" author={userPoster} post={post} />
          <Posts postType="text" author={userPoster} post={post2} />
        </div>
      </Section>
    </>
  );
}
