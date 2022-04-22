import styled from 'styled-components';
import { Layout } from 'styles';

const ItemWrapper = styled.div`
  ${Layout.flexRowBetween}
  box-sizing: border-box;
  border: 1px solid black;
  padding: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const ItemThumbnail = styled.div`
  min-width: 32px;
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.GRAY01};
`;
const ItemTextWrapper = styled.div`
  padding: 4px;
  flex: 3;
  ${Layout.flexColStart}
`;
const ItemJobInfoWrapper = styled.div`
  ${Layout.flexRowBetween}
`;

const ItemTextCorp = styled.span`
  font-size: 8px;
`;
const ItemTextTitle = styled.span`
  font-size: 16px;
`;
const ItemTextPosition = styled.span`
  font-size: 12px;
`;
const ItemTextSalery = styled.span`
  font-size: 8px;
  word-break: keep-all;
`;

interface JobItemProps {}

const JobItem: (props: JobItemProps) => JSX.Element = (props) => {
  return (
    <ItemWrapper>
      <ItemThumbnail />
      <ItemTextWrapper>
        <ItemTextCorp>Lahat Food</ItemTextCorp>
        <ItemTextTitle>Looking for chef!</ItemTextTitle>
        <ItemJobInfoWrapper>
          <ItemTextPosition>Cook</ItemTextPosition>
          <ItemTextSalery>500PHP/day</ItemTextSalery>
        </ItemJobInfoWrapper>
      </ItemTextWrapper>
    </ItemWrapper>
  );
};

export default JobItem;
