import { Header } from '@components/molecules';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  ${Layout.flexColCenter}
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

const LayoutTemplate: (props: LayoutProps) => JSX.Element = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header fixed={true} />
      {children}
    </LayoutWrapper>
  );
};

export default LayoutTemplate;
