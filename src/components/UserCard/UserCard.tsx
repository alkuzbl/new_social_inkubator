import React, { FC } from 'react';

import user from 'assets/images/user.jpg';
import styles from 'components/common/UserMessageCard/styles/UserMessageCard.module.scss';

type UserCardPropsType = {
  name: string;
  content?: string;
  status?: string;
};

export const UserCard: FC<UserCardPropsType> = props => {
  const { content, name, status } = props;

  return (
    <div className={styles.userMessageCard}>
      <div className={styles.userMessageCard}>
        <div className={styles.userMessageCard__image}>
          <img className={styles.userMessageCard__img} src={user} alt="user" />
        </div>
        <div className={styles.userMessageCard__contentBox}>
          <h4 className={styles.userMessageCard__name}>{name}</h4>
          <span className={styles.userMessageCard__content}> {status || content} </span>
        </div>
      </div>
    </div>
  );
};
