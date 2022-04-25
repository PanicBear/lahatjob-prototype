import { JobItem } from '@components/molecules';
import styled from 'styled-components';
import { Layout } from 'styles';

const ListSectionWithStyle = styled.section`
  ${Layout.flexColCenter}
  width: 100%;
  margin-top: 8px;
  padding: 8px;
`;
const ListArea = styled.div`
  width: 100%;
  display: grid;
  gap: 4px;
  margin-top: 4px;
  padding: 4px 8px;
  grid-template-columns: 50% 50%;
`;

interface ListSectionProps {
  SectionHeader: (props: any) => JSX.Element;
}

const ListSection: (props: ListSectionProps) => JSX.Element = ({ SectionHeader }) => {
  return (
    <ListSectionWithStyle>
      <SectionHeader />
      <ListArea>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </ListArea>
    </ListSectionWithStyle>
  );
};

export default ListSection;
