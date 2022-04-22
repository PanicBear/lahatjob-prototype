import { ListFilterBar } from '@components/molecules';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

const ListSectionWithStyle = styled.section`
  ${Layout.flexColCenter}
  width: 100%;
  padding: 8px 16px;
`;
const ListArea = styled.ul`
  list-style: none;
`;

interface ListSectionProps {}

const ListSection: (props: ListSectionProps) => JSX.Element = ({}) => {
  return (
    <ListSectionWithStyle>
      <ListFilterBar />
      <ListArea></ListArea>
    </ListSectionWithStyle>
  );
};

export default ListSection;
