import React, { FC } from 'react';

import styles from './styles/IconButton.module.scss';
import { IconButtonPropsType } from './types';

export const IconButton: FC<IconButtonPropsType> = props => {
  const { icon, className, style, onClick } = props;

  const handleClick = (): void => {
    onClick && onClick();
  };
  return (
    <button
      type="button"
      className={className || styles.button}
      style={style || {}}
      onClick={handleClick}
    >
      <img src={icon} alt="email" className={styles.button__icon} />
    </button>
  );
};
