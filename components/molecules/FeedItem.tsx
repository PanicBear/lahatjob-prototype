import React from 'react';
import styled from 'styled-components';
import { Color, Layout } from 'styles';

const FeedItemWrapper = styled.li`
  ${Layout.flexColStart}
  padding: 4px;
`;
const FeedTitle = styled.span`
  font-size: 14px;
`;
const FeedInfoWrapper = styled.div`
  ${Layout.flexRowStart}
`;
const FeedInfo = styled.span`
  font-size: 12px;
  &:not(:last-child) {
    padding-right: 8px;
    margin-right: 8px;
    border-right: 1px ${Color.GRAY01} solid;
  }
`;

interface FeedItemProps {
  title: string;
  author: string;
  createdAt: string;
  commentCount: number;
}

const FeedItem: (props: FeedItemProps) => JSX.Element = ({ title, author, createdAt, commentCount }) => {
  return (
    <FeedItemWrapper>
      <FeedTitle>{title}</FeedTitle>
      <FeedInfoWrapper>
        <FeedInfo>{author}</FeedInfo>
        <FeedInfo>{createdAt}</FeedInfo>
        <FeedInfo>{commentCount} comments</FeedInfo>
      </FeedInfoWrapper>
    </FeedItemWrapper>
  );
};

export default FeedItem;
