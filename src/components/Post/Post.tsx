import React, { FC } from 'react';

import styles from './styles/Post.module.scss';

import clock from 'assets/images/icons/clock.png';
import commentsIcon from 'assets/images/icons/comments.svg';
import emailIcon from 'assets/images/icons/email-white.svg';
import eyeIcon from 'assets/images/icons/eye.svg';
import heartIcon from 'assets/images/icons/heart.svg';
import icon1 from 'assets/images/icons/icon1.png';
import pin from 'assets/images/icons/pin.png';
import iconUser from 'assets/images/user.jpg';
import { IconButton, IconForPost, IconUser, PostContent } from 'components';

export const Post: FC = () => {
  const userName = 'John Doe';
  const countViews = 50;
  const countComments = 15;
  return (
    <div className={styles.post}>
      <div className={styles.post__profileBox}>
        <IconUser user={iconUser} />
        <div className={styles.post__profileBoxInner}>
          <p className={styles.post__profileBoxName}>{userName}</p>
          <IconForPost icon={clock} title="3 min ago" />
        </div>
      </div>
      <div className={styles.post__info}>
        <div className={styles.post__infoIcon}>
          <IconForPost icon={icon1} title="Epic coder" />
          <IconForPost icon={pin} title="Belarus" />
        </div>
        <div>
          <IconButton icon={emailIcon} />
        </div>
      </div>
      <div className={styles.post__content}>
        <PostContent
          title="Hello"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi,
        corporis, debitis doloremque, eos exercitationem expedita hic ipsa ipsam ipsum
        nihil nostrum nulla quae qui ratione sed totam voluptatibus. Reiciend..."
        />
      </div>
      <div className={styles.post__icons}>
        <IconForPost icon={heartIcon} title={`Likes ${countViews}`} />
        <IconForPost icon={commentsIcon} title={`Comments ${countComments}`} />
        <IconForPost icon={eyeIcon} title={`Views ${countViews}`} />
      </div>
    </div>
  );
};
