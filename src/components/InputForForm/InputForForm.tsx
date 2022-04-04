import React, { FC } from 'react';

import { InputForFormPropsType } from './types';

import styles from 'components/common/Input/styles/Input.module.scss';

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
