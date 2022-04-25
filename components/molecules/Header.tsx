import { Button, Icon } from '@components/atoms';
import React from 'react';
import styled, { css } from 'styled-components';
import { Layout, Shadow } from 'styles';

const HeaderWithStyle = styled.header<HeaderProps>`
  ${Layout.flexRowBetween}
  ${Shadow.middle}
  padding: 8px 12px;
  width: 100%;
  height: 64px;
  background-color: white;

  ${(props: any) =>
    props.fixed &&
    css`
      position: fixed;
      top: 0;
    `}
`;

const Title = styled.span`
  font-size: 28px;
`;

interface HeaderProps {
  fixed: boolean;
}

const Header: (props: HeaderProps) => JSX.Element = ({ fixed }) => {
  const onMenuClick = () => console.log('menuClick');
  const onUserClick = () => console.log('userClick');

  return (
    <HeaderWithStyle fixed={fixed}>
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
