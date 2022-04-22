import styled from 'styled-components';
import { Layout } from 'styles';

const CountWrapper = styled.div`
  ${Layout.flexRowBetween}
  width: 160px;
`;

const CountField = styled.span`
  width: 40px;
  font-weight: bold;
  font-size: 12px;
`;
const CountNumber = styled.span`
  flex: 1;
  font-size: 12px;
`;

interface CountProps {
  fieldName: string;
  fieldCount?: number;
}

const Count: (props: CountProps) => JSX.Element = ({ fieldName, fieldCount = 0 }) => {
  return (
    <CountWrapper>
      <CountField>{fieldName}</CountField>
      <CountNumber>{fieldCount}</CountNumber>
    </CountWrapper>
  );
};

export default Count;
