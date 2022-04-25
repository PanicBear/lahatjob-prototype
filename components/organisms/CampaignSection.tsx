import { Campaign } from '@components/molecules';
import styled from 'styled-components';
import { Layout } from 'styles';
import { CampaignInfo } from 'types';

interface CampaignSectionProps {
  campaigns: CampaignInfo[];
}

const CampaignArea = styled.section`
  ${Layout.flexRowBetween}
  width: 100%;
  padding: 8px;
`;

const CampaignSection: (props: CampaignSectionProps) => JSX.Element = ({ campaigns }) => {
  return (
    <CampaignArea>
      {campaigns?.map((campaign, idx) => (
        <Campaign key={idx} {...campaign} />
      ))}
    </CampaignArea>
  );
};

export default CampaignSection;
