import { Button } from '@components/atoms';
import styled from 'styled-components';
import { Layout } from 'styles';

interface FooterProps {}

const FooterWrapper = styled.footer`
  ${Layout.flexRowBetween}
  width:100%;
  padding: 8px 16px;
  height: 64px;
  margin-bottom: 16px;
`;

const Footer: (props: FooterProps) => JSX.Element = ({}) => {
  return (
    <FooterWrapper>
      <Button style={{ flex: 1 }} onClick={() => console.log('Login')}>
        Login
      </Button>
      <Button style={{ flex: 1 }} onClick={() => console.log('Service Center')}>
        Service Center
      </Button>
      <Button style={{ flex: 1 }} onClick={() => console.log('My Page')}>
        My Page
      </Button>
      <Button style={{ flex: 1 }} onClick={() => console.log('Terms of Service')}>
        Terms of Service
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
