import { CSSProperties } from 'react';

import { FieldValues, UseFormRegister } from 'react-hook-form';

type NameType =
  | 'email'
  | 'password'
  | 'rememberMe'
  | 'fullName'
  | 'country'
  | 'confirmPassword';
type AutoCompleteType =
  | 'on'
  | 'off'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'name'
  | 'email';

export type InputForFormPropsType = {
  placeholder?: string;
  style?: CSSProperties;
  errors?: { [key: string]: { message: string } };
  register?: UseFormRegister<FieldValues>;
  name: NameType;
  icon: string;
  type: 'checkbox' | 'text' | 'password' | 'email';
  autoComplete?: AutoCompleteType;
};
