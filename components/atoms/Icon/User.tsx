import React, { memo } from 'react';
import { SVGIconProps } from '.';

const UserIcon: (props: SVGIconProps) => JSX.Element = ({ fill = 'none', height = 32 }) => (
  <svg
    fill={fill}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default memo(UserIcon);
