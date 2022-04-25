import { Icon } from '@components/atoms';
import { Count } from '@components/molecules';
import styled from 'styled-components';
import { Layout } from 'styles';

const CountSectionWrapper = styled.div`
  ${Layout.flexRowBetween}
  width:100%;
  padding: 8px 16px;
  margin-top: 8px;
`;
const CountSection = styled.section`
  padding: 4px 8px;
`;

const ToAllJobs = styled.div`
  ${Layout.flexRowBetween}
  font-size: 14px;
`;

interface VisitCountProps {}

const VisitCountSection: (props: VisitCountProps) => JSX.Element = ({}) => {
  return (
    <CountSectionWrapper>
      <CountSection>
        <Count fieldName={'Daily'} fieldCount={10000} />
        <Count fieldName={'Total'} fieldCount={100000000} />
      </CountSection>
      <ToAllJobs>
        More jobs in HERE <Icon.ToIcon />
      </ToAllJobs>
    </CountSectionWrapper>
  );
};

export default VisitCountSection;
