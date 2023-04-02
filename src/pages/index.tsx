import React from 'react';
import NavBar from '../components/shared/NavBar';
import styled from 'styled-components';
import Posts from '../components/shared/Posts';
import { findPosts } from './api/posts/verbs';

const Section = styled.section`
  margin: 1rem 0;
`;

// TODO replace userId for real user id when auth is implemented
const userId = 'clf7n24f50000g38ov6wmcwgw';

export async function getServerSideProps() {
  const posts = await findPosts(userId);
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts.data)),
    },
  };
}

export default function Home({ posts }: any) {
  console.log(posts)
  return (
    <>
      <NavBar />
      <Section className="Home">
        <div className="main-content">
          {posts.length &&
            posts.map((post: any) => {
              return <Posts key={post.id} {...post} />;
            })}
        </div>
      </Section>
    </>
  );
}
