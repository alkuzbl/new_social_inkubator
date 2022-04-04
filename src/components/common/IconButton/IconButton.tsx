import React, { FC } from 'react';

import styles from './styles/IconButton.module.scss';
import { IconButtonPropsType } from './types';

export const IconButton: FC<IconButtonPropsType> = props => {
  const { icon, className, style } = props;
  return (
    <button type="button" className={className || styles.button} style={style || {}}>
      <img src={icon} alt="email" className={styles.button__icon} />
    </button>
  );
};
