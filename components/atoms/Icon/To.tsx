import React, { memo } from 'react';
import { SVGIconProps } from '.';

const ToIcon: (props: SVGIconProps) => JSX.Element = ({ fill = 'none' }) => (
  <svg
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default memo(ToIcon);
