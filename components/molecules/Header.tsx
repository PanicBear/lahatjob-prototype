import { Button, Icon } from '@components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

const HeaderWithStyle = styled.header`
  ${Layout.flexRowBetween}
  padding: 8px 12px;
  width: 100%;
  height: 64px;
`;

const Title = styled.span`
  font-size: 28px;
`;

interface HeaderProps {}

const Header: (props: HeaderProps) => JSX.Element = ({}) => {
  const onMenuClick = () => console.log('menuClick');
  const onUserClick = () => console.log('userClick');

  return (
    <HeaderWithStyle>
      <Button onClick={onMenuClick}>
        <Icon.MenuIcon height={24} />
      </Button>
      <Title>LahatJob</Title>
      <Button onClick={onUserClick}>
        <Icon.UserIcon height={24} />
      </Button>
    </HeaderWithStyle>
  );
};

export default Header;
