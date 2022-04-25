import { HomeTemplate } from '@components/templates';
import LayoutTemplate from '@components/templates/LayoutTemplate';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <LayoutTemplate>
      <HomeTemplate />
    </LayoutTemplate>
  );
};

export default Home;
