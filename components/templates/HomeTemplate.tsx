import { Header, ListFilterHeader, ListTitleHeader, Navbar, Search } from '@components/molecules';
import { CampaignSection, ListSection, VisitCountSection } from '@components/organisms';

interface HomeTemplateProps {}

const HomeTemplate: (props: HomeTemplateProps) => JSX.Element = ({}) => {
  return (
    <>
      <Header />
      <Search />
      <Navbar />
      <VisitCountSection />
      <ListSection SectionHeader={ListFilterHeader} />
      <ListSection SectionHeader={ListTitleHeader} />
      <CampaignSection />
    </>
  );
};

export default HomeTemplate;
