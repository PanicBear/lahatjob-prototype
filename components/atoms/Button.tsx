import React from 'react';
import styled from 'styled-components';

const ButtonWithStyle = styled.button`
  width: 24px;
  height: 24px;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
  box-sizing: content-box;
`;

interface ButtonProps {
  style?: React.CSSProperties;
  onClick: (e: React.MouseEvent) => void;
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
