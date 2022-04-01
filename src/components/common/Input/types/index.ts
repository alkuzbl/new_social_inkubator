import { CSSProperties } from 'react';

export type InputPropsType = {
  icon?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  style?: CSSProperties;
  name: string;
  type: 'password' | 'email' | 'text';
};
