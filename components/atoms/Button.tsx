import React, { Children } from 'react';
import styled from 'styled-components';

const ButtonWithStyle = styled.button`
  width: 32px;
  font-size: 16px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  box-sizing: content-box;
`;

interface ButtonProps {
  style?: React.CSSProperties;
  onClick: () => void;
  children?: React.ReactNode;
  [key: string]: any;
}

const Button: (props: ButtonProps) => JSX.Element = ({ style = {}, onClick, children = '', ...attrs }) => {
  return (
    <ButtonWithStyle style={style} onClick={onClick}>
      {children}
    </ButtonWithStyle>
  );
};

export default Button;
