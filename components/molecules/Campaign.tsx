import styled from 'styled-components';
import { Layout } from 'styles';

const CampaignWrapper = styled.div`
  flex: 1;
  ${Layout.flexColStart}
`;
const CampaignThumbnail = styled.div`
  flex: 1;
  margin: 4px 8px;
  aspect-ratio: 16/9;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.GRAY01};
`;
const CampaignTitle = styled.p`
  font-size: 16px;
  text-align: center;
`;
const CampaignDate = styled.p`
  font-size: 12px;
  text-align: center;
`;

interface CampaignProps {}

const Campaign: (props: CampaignProps) => JSX.Element = ({}) => {
  return (
    <CampaignWrapper>
      <CampaignThumbnail />
      <CampaignTitle>Watch out!</CampaignTitle>
      <CampaignDate>25.04.2022</CampaignDate>
    </CampaignWrapper>
  );
};

export default Campaign;
