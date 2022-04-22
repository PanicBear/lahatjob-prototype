import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { Color } from 'styles';

const ComponentStyleWrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  margin: auto;
  overflow-x: auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Color}>
      <ComponentStyleWrapper>
        <Component {...pageProps} />
      </ComponentStyleWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
