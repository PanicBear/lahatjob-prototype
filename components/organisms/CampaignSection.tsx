import { Campaign } from '@components/molecules';
import styled from 'styled-components';
import { Layout } from 'styles';

interface CampaignSectionProps {}

const CampaignArea = styled.section`
  ${Layout.flexRowBetween}
  padding: 8px;
`;

const CampaignSection: (props: CampaignSectionProps) => JSX.Element = ({}) => {
  return (
    <CampaignArea>
      <Campaign />
      <Campaign />
    </CampaignArea>
  );
};

export default CampaignSection;
