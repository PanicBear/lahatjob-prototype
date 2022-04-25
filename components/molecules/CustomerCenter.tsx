import React from 'react';
import styled from 'styled-components';
import { Layout } from 'styles';

const CustomerCenterArea = styled.section`
  ${Layout.flexColStart}
  width: 100%;
  margin-top: 8px;
  padding: 8px 16px;
`;
const LargeText = styled.span`
  font-size: 24px;
`;
const SmallText = styled.span`
  font-size: 14px;
`;

const CustomerCenter: () => JSX.Element = () => {
  return (
    <CustomerCenterArea>
      <LargeText>Customer center</LargeText>
      <LargeText>0000-0000</LargeText>
      <SmallText>Weekday XX-XX</SmallText>
      <SmallText>Email: ****@gmail.com</SmallText>
      <SmallText>Fax: 00-0000-0000</SmallText>
    </CustomerCenterArea>
  );
};

export default CustomerCenter;
