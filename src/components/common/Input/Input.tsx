import React, { ChangeEvent, FC, memo, useState } from 'react';

import styles from './styles/Input.module.scss';
import { InputPropsType } from './types';

export const Input: FC<InputPropsType> = memo(props => {
  const { name, onChange, icon, placeholder, type, value, style } = props;

  const [text, setText] = useState<string>('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.currentTarget.value);
    } else {
      setText(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.inputBox} style={style || {}}>
      {icon && (
        <span className={styles.inputBox__iconBox}>
          <img className={styles.inputBox__icon} src={icon} alt={name} />
        </span>
      )}

      <input
        className={styles.inputBox__input}
        type={type}
        name={name}
        onChange={handleChangeValue}
        placeholder={placeholder && placeholder}
        value={value || text}
      />
    </div>
  );
});
