import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  postType: string;
  author: {
    firstName: string;
    lastName: string;
    profilePic: string;
  };
  post: {
    content: string;
    date: string;
    visibility: string;
  };
}

const Section = styled.div`
  margin: 1rem 0;
`;

export default function FullWidthContainer({ postType, author, post }: Props) {
  return (
    <Section className="posts-container">
      <div className="posts-header">
        <div className="author">
          <Image src={author.profilePic} alt="Pic" width={40} height={40} />
          <div className="post-data">
            <h1>{author.firstName + ' ' + author.lastName}</h1>
            <span>
              <h5>{post.date}</h5>
              {post.visibility === 'public' && (
                <Image
                  src="/images/components/posts/public.svg"
                  alt="Pic"
                  width={17}
                  height={12}
                />
              )}
            </span>
          </div>
        </div>
        <span className="utility-icons">
          <Image
            src="/images/utilities/options.svg"
            alt="Options"
            width={25}
            height={25}
          />
          <Image
            src="/images/utilities/close.svg"
            alt="Close"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="posts-content">
        {postType === 'text' && <p>{post.content}</p>}
      </div>
      <div className="posts-actions">
        <span>
          <Image
            src="/images/utilities/like.svg"
            alt="Close"
            width={20}
            height={20}
          />
          <h3>Like</h3>
        </span>
        <span>
          <Image
            src="/images/utilities/comment.svg"
            alt="Close"
            width={20}
            height={20}
          />
          <h3>Comment</h3>
        </span>
      </div>
    </Section>
  );
}
