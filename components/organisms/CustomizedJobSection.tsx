import { JobItem } from '@components/molecules';
import styled from 'styled-components';
import { Layout } from 'styles';

interface CustomizedJobProps {}

const JobListSection = styled.section`
  ${Layout.flexColCenter}
  width: 100%;
  margin-top: 8px;
  padding: 8px;
`;

const ListArea = styled.div`
  width: 100%;
  display: grid;
  margin-top: 8px;
  padding: 4px 8px;
  grid-template-columns: 50% 50%;
`;

const CustomizedJobSection: (props: CustomizedJobProps) => JSX.Element = ({}) => {
  return (
    <JobListSection>
      <ListArea>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </ListArea>
    </JobListSection>
  );
};

export default CustomizedJobSection;
