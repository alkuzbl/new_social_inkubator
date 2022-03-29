import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from 'components/Messages/Message/styles/Message.module.scss';

type MessagePropsType = {
  setCollapsedMessage: (value: boolean) => void;
};
export const Message: FC<MessagePropsType> = props => {
  const { setCollapsedMessage } = props;

  const handleClick = (): void => setCollapsedMessage(true);

  return (
    <div className={styles.message}>
      <div className={styles.message__image}>
        <img className={styles.message__img} src="#" alt="user" />
      </div>
      <div className={styles.message__content}>
        <div className={styles.message__inner}>
          <Link to="/" className={styles.message__title} onClick={handleClick}>
            Vasyz
          </Link>
          <span className={styles.message__time}>2 min ago</span>
        </div>
        <p className={styles.message__text}>Message nkldlvn kvnelw lknew klnve</p>
      </div>
    </div>
  );
};
