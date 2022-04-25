import { FeedItem } from '@components/molecules';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

interface JobTalkFeedProps {
  children: React.ReactNode;
}

const FeedSection = styled.section`
  ${Layout.flexColStart}
  width: 100%;
  margin-top: 12px;
  padding: 8px;
`;
const FeedWrapper = styled.ul`
  list-style: none;
  padding: 6px 12px;
`;

const JobTalkFeed: (props: JobTalkFeedProps) => JSX.Element = ({ children: Header }) => {
  return (
    <FeedSection>
      {Header}
      <FeedWrapper>
        <FeedItem title={'title'} author="author" createdAt="15.04.22" commentCount={3} />
        <FeedItem title={'title'} author="author" createdAt="15.04.22" commentCount={3} />
      </FeedWrapper>
    </FeedSection>
  );
};

export default JobTalkFeed;
