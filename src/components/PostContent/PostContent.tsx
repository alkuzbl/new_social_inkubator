import React, { FC } from 'react';

import styles from './styles/PostContent.module.scss';
import { PostContentPropsType } from './types';

export const PostContent: FC<PostContentPropsType> = props => {
  const { title, text } = props;

  return (
    <>
      <h3 className={styles.post__title}>{title}</h3>
      <p className={styles.post__content}>
        {text}
        <span>view more</span>
      </p>
    </>
  );
};
