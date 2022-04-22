import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

const NavbarWithStyle = styled.nav`
  ${Layout.flexRowBetween}
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  margin-top: 8px;
`;
const NavLinkWithStyle = styled.a`
  height: 24px;
  font-size: 16px;
  padding: 0px 8px;
`;

interface NavbarProps {}

const Navbar: (props: NavbarProps) => JSX.Element = ({}) => {
  return (
    <NavbarWithStyle>
      <NavLinkWithStyle>Job info</NavLinkWithStyle>
      <NavLinkWithStyle>Region</NavLinkWithStyle>
      <NavLinkWithStyle>Map</NavLinkWithStyle>
      <NavLinkWithStyle>Talent</NavLinkWithStyle>
      <NavLinkWithStyle>Talk</NavLinkWithStyle>
    </NavbarWithStyle>
  );
};

export default Navbar;
