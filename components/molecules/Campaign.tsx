import styled from 'styled-components';
import { Layout } from 'styles';
import { CampaignInfo } from 'types';

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

const Campaign: (props: CampaignInfo) => JSX.Element = ({ thumbnailUrl, title, createdAt }) => {
  return (
    <CampaignWrapper>
      <CampaignThumbnail />
      <CampaignTitle>{title}</CampaignTitle>
      <CampaignDate>{createdAt}</CampaignDate>
    </CampaignWrapper>
  );
};

export default Campaign;
