import React, { FC } from 'react';

import styles from './styles/IconForPost.module.scss';

import { IconForPostPropsType } from 'components/common/IconForPost/types';

export const IconForPost: FC<IconForPostPropsType> = props => {
  const { icon, title, className, style } = props;

  return (
    <div className={className || styles.icon} style={style || {}}>
      <img src={icon} alt="clock" />
      <span>{title}</span>
    </div>
  );
};
