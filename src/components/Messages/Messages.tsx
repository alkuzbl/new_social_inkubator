import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Message } from './Message/Message';

import styles from 'components/Messages/styles/Messages.module.scss';

type MessagePropsType = {
  collapsedMessage: boolean;
  setCollapsedMessage: (value: boolean) => void;
};
export const Messages: FC<MessagePropsType> = props => {
  const { collapsedMessage, setCollapsedMessage } = props;

  const styleMessageActive = collapsedMessage
    ? styles.messages
    : `${styles.messages} ${styles.active}`;

  const handleClick = (): void => {
    console.log('Messages button - CLICK!');
  };

  return (
    <div className={styleMessageActive}>
      <div className={styles.messages__top}>
        <button type="button" onClick={handleClick}>
          Clear all
        </button>
      </div>

      <div className={styles.messages__wrapper}>
        <Message setCollapsedMessage={setCollapsedMessage} />
        <Message setCollapsedMessage={setCollapsedMessage} />
      </div>
      <Link
        className={styles.messages__viewButton}
        to="/messages"
        onClick={() => setCollapsedMessage(true)}
      >
        View All Messages
      </Link>
    </div>
  );
};
