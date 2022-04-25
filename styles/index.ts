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

export const Shadow = {
  middle: css`
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  `,
};
