import { Count, Header, Navbar, Search } from '@components/molecules';
import VisitCountSection from '@components/organisms/VisitCountSection';
import React from 'react';

interface HomeTemplateProps {}

const HomeTemplate: (props: HomeTemplateProps) => JSX.Element = ({}) => {
  return (
    <>
      <Header />
      <Search />
      <Navbar />
      <VisitCountSection />
    </>
  );
};

export default HomeTemplate;
