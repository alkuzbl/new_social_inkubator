import React, { FC, memo } from 'react';

import styles from 'components/common/Input/styles/Input.module.scss';

type InputForFormPropsType = {
  className?: string;
  required?: boolean;
  placeholder?: string;
  name: 'email' | 'password' | 'rememberMe' | 'confirmPassword';
  icon: string;
  register?: any;
  errors?: any;
  type: 'checkbox' | 'text' | 'password' | 'email';
  style?: any;
  autoComplete?: 'on' | 'off' | 'username' | 'new-password' | 'current-password' | 'name';
};

export const InputForForm: FC<InputForFormPropsType> = memo(props => {
  const { name, icon, placeholder, register, autoComplete, errors, style, ...rest } =
    props;
  console.log(errors);

  return (
    <div className={styles.inputBox} style={style || {}}>
      {icon && (
        <span className={styles.inputBox__iconBox}>
          <img className={styles.inputBox__icon} src={icon} alt={name} />
        </span>
      )}

      <input
        className={styles.inputBox__input}
        {...register(name)}
        {...rest}
        placeholder={placeholder && placeholder}
        autoComplete={autoComplete}
      />
      <div>{errors[name] && errors[name].message}</div>
    </div>
  );
});
