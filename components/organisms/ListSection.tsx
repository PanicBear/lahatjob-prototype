import { JobItem, ListFilterBar } from '@components/molecules';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

const ListSectionWithStyle = styled.section`
  ${Layout.flexColCenter}
  width: 100%;
  padding: 4px 16px;
`;
const ListArea = styled.div`
  width: 100%;
  display: grid;
  margin-top: 8px;
  grid-template-columns: 50% 50%;
`;

interface ListSectionProps {}

const ListSection: (props: ListSectionProps) => JSX.Element = ({}) => {
  return (
    <ListSectionWithStyle>
      <ListFilterBar />
      <ListArea>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </ListArea>
    </ListSectionWithStyle>
  );
};

export default ListSection;
