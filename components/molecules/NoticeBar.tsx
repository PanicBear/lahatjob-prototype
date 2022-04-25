import styled from 'styled-components';
import { Layout } from 'styles';

interface NoticeProps {}

const NoticeWrapper = styled.div`
  ${Layout.flexRowBetween}
  width: 100%;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.GRAY01};
`;
const NoticeText = styled.span`
  font-size: 16px;
`;
const NoticeTitle = styled.span`
  text-align: center;
  flex: 1;
  font-size: 20px;
`;
const NoticeCreatedAt = styled.span`
  font-size: 12px;
`;

const NoticeBar: (props: NoticeProps) => JSX.Element = ({}) => {
  return (
    <NoticeWrapper>
      <NoticeText>Notice</NoticeText>
      <NoticeTitle>This is title</NoticeTitle>
      <NoticeCreatedAt>25.04.2022</NoticeCreatedAt>
    </NoticeWrapper>
  );
};

export default NoticeBar;
