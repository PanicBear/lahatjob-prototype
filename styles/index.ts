import { css } from 'styled-components';

export * from './color';

export const Layout = {
  flexRowBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexColStart: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  spacePadding: css`
    padding: 1vh 2vw;
  `,
};
