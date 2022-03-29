import React, { FC } from 'react';

import styles from './styles/UserMessage.module.scss';

import { IconUser } from 'components';

type UserMessagePropsType = {
  content?: string;
  user?: string;
  dataTime?: string;
  isReceivedMessage: boolean;
};

export const UserMessage: FC<UserMessagePropsType> = props => {
  const { content, user, dataTime = 'Sat, Aug 23, 1:08 PM', isReceivedMessage } = props;

  const styleMyMessage = isReceivedMessage
    ? styles.message__content
    : `${styles.message__content} ${styles.active}`;

  return (
    <div
      className={
        isReceivedMessage ? styles.message : `${styles.message} ${styles.active}`
      }
    >
      <div className={styles.message__inner}>
        <div>{!isReceivedMessage && <IconUser user={user} />}</div>
        <p className={styleMyMessage}>{content}</p>
        <div>{isReceivedMessage && <IconUser user={user} />}</div>
      </div>
      <p className={styles.message__dataTime}>{dataTime}</p>
    </div>
  );
};
