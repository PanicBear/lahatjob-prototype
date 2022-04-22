import { Header, Search } from '@components/molecules';
import React from 'react';

interface HomeTemplateProps {}

const HomeTemplate: (props: HomeTemplateProps) => JSX.Element = ({}) => {
  return (
    <>
      <Header />
      <Search />
    </>
  );
};

export default HomeTemplate;
