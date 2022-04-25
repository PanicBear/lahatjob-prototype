import { Button } from '@components/atoms';
import styled from 'styled-components';
import { Color, Layout } from 'styles';

const TitleArea = styled.div`
  ${Layout.flexRowBetween}
  width: 100%;
  padding: 0 8px;
`;
const SectionTitle = styled.span`
  font-size: 16px;
`;

interface ListTitleProps {
  title: string;
  buttonText: string;
}

const ListTitleHeader: (props: ListTitleProps) => JSX.Element = ({ title, buttonText }) => {
  return (
    <TitleArea>
      <SectionTitle>{title}</SectionTitle>
      <Button
        onClick={() => console.log('edit')}
        style={{ backgroundColor: `${Color.GRAY01}`, padding: '0px 12px', fontSize: '14px', minWidth: 'fit-content' }}
      >
        {buttonText}
      </Button>
    </TitleArea>
  );
};

export default ListTitleHeader;
