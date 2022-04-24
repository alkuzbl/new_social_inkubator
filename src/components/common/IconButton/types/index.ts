import { CSSProperties } from 'react';

export type IconButtonPropsType = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  icon: string;
};
