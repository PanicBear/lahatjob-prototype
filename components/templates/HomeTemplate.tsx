import {
  CustomerCenter,
  Footer,
  ListFilterHeader,
  ListTitleHeader,
  Navbar,
  NoticeBar,
  Search,
} from '@components/molecules';
import { CampaignSection, FeedSection, ListSection, VisitCountSection } from '@components/organisms';
import { CampaignInfo } from 'types';

interface HomeTemplateProps {}

const dummyCampaigns: CampaignInfo[] = [
  { thumbnailUrl: 'url1', title: 'title1', createdAt: 'date1' },
  { thumbnailUrl: 'url2', title: 'title2', createdAt: 'date2' },
];

const dummyEvent: CampaignInfo[] = [
  { thumbnailUrl: 'url1', title: 'title1', createdAt: 'date1' },
  { thumbnailUrl: 'url2', title: 'title2', createdAt: 'date2' },
];

const HomeTemplate: (props: HomeTemplateProps) => JSX.Element = ({}) => {
  return (
    <>
      <Search />
      <Navbar />
      <VisitCountSection />
      <ListSection>
        <ListFilterHeader />
      </ListSection>
      <ListSection>
        <ListTitleHeader title={'Customized Job'} buttonText={'Edit'} />
      </ListSection>
      <CampaignSection campaigns={dummyCampaigns} />
      <FeedSection>
        <ListTitleHeader title="Job Talk" buttonText={'See more'} />
      </FeedSection>
      <CampaignSection campaigns={dummyEvent} />
      <NoticeBar />
      <CustomerCenter />
      <Footer />
    </>
  );
};

export default HomeTemplate;
