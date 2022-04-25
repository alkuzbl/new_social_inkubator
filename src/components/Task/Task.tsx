import React, { FC } from 'react';

import styles from './styles/Task.module.scss';
import { TaskPropsType } from './types';

export const Task: FC<TaskPropsType> = props => {
  const { title } = props;
  return <li className={styles.task__item}>{title}</li>;
};
