import React, { FC } from 'react';

import styles from './styles/BoxNewPost.module.scss';

import user from 'assets/images/user.jpg';
import { BoxNewPostPropsType } from 'components/BoxNewPost/types';
import { IconUser } from 'components/IconUser';

export const BoxNewPost: FC<BoxNewPostPropsType> = props => {
  const { openModalNewPost } = props;

  const handleClickNewPost = (): void => {
    openModalNewPost(true);
  };

  return (
    <>
      <span className={styles.box__topLine} />
      <div className={styles.box__newPost}>
        <div>
          <IconUser user={user} />
        </div>
        <button type="button" className={styles.box__btn} onClick={handleClickNewPost}>
          New Post
        </button>
      </div>
    </>
  );
};
