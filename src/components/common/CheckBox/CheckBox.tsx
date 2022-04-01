import React, { ChangeEvent, FC, useState } from 'react';

import styles from './styles/CheckBox.module.scss';
import { CheckBoxPropsType } from './types';

export const CheckBox: FC<CheckBoxPropsType> = props => {
  const { onChange, label, name, value } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.currentTarget.checked);
    if (onChange) {
      onChange(e.currentTarget.checked);
    }
  };

  return (
    <label className={!checked ? styles.checkbox : `${styles.checkbox} ${styles.active}`}>
      <input
        className={styles.checkbox__input}
        onChange={handleChange}
        type="checkbox"
        name={name}
        checked={value || checked}
      />
      {label || null}
    </label>
  );
};
