import React, { FC } from 'react';

import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from 'components/common/Input/styles/Input.module.scss';

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
  style?: React.CSSProperties;
  errors?: { [key: string]: { message: string } };
  register?: UseFormRegister<FieldValues>;
  name: NameType;
  icon: string;
  type: 'checkbox' | 'text' | 'password' | 'email';
  autoComplete?: AutoCompleteType;
};

export const InputForForm: FC<InputForFormPropsType> = props => {
  const { name, icon, placeholder, register, autoComplete, errors, style, ...rest } =
    props;

  return (
    <div className={styles.inputBox} style={style || {}}>
      {icon && (
        <span className={styles.inputBox__iconBox}>
          <img className={styles.inputBox__icon} src={icon} alt={name} />
        </span>
      )}

      <input
        className={styles.inputBox__input}
        {...(register ? { ...register(name) } : undefined)}
        {...rest}
        placeholder={placeholder && placeholder}
        autoComplete={autoComplete}
      />
      <div className={styles.inputBox__errors}>{!errors || errors[name]?.message}</div>
    </div>
  );
};
