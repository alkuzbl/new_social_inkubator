import React, { FC } from 'react';

import ScrollableFeed from 'react-scrollable-feed';

import styles from './styles/MessagesPage.module.scss';

import iconUser from 'assets/images/user.jpg';
import { UserMessageCard, UserMessage, UserCard } from 'components';

const messageTest = 'lorem jklklsa nn oopqq fsknfnks jo elnfwl flkwnlknkl fnwl fnlwhwf';
const messageTest2 = 'hlk lafhsak fef ldedef';

export const MessagesPage: FC = () => (
  <div className={styles.messages}>
    <div className="container">
      <div className={styles.messages__wrapper}>
        <div className={styles.messages__interlocutors}>
          <h4 className={styles.messages__interlocutorsTitle}>Messages</h4>
          <div className={styles.messages__inner}>
            <UserMessageCard
              name="Vasya"
              unreadCountMessage={1}
              dataTime="1:55 PM"
              activeClass
              content="Lorem ipsum dolor sit amet."
            />
            <UserMessageCard
              name="Jhon"
              unreadCountMessage={null}
              dataTime="1:55 PM"
              content="Lorem ipsum dolor sit amet."
            />
            <UserMessageCard
              name="Artur"
              unreadCountMessage={11}
              dataTime="1:55 PM"
              content="Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
        <div className={styles.messages__messageContent}>
          <div className={styles.messages__inner}>
            <div className={styles.messages__userCard}>
              <UserCard name="Vasya" status="Online" />
            </div>

            <ScrollableFeed className={styles.messages__box}>
              <UserMessage isReceivedMessage content={messageTest} user={iconUser} />
              <UserMessage isReceivedMessage content={messageTest} user={iconUser} />
              <UserMessage
                isReceivedMessage={false}
                content={messageTest2}
                user={iconUser}
              />
              <UserMessage
                isReceivedMessage={false}
                content={messageTest2}
                user={iconUser}
              />
              <UserMessage isReceivedMessage content={messageTest} user={iconUser} />
              <UserMessage
                isReceivedMessage={false}
                content={messageTest2}
                user={iconUser}
              />
            </ScrollableFeed>
          </div>

          <div>
            <form className={styles.messageForm}>
              <div className={styles.messageForm__inner}>
                <textarea className={styles.messageForm__textarea} />
                <button type="submit">Send</button>
              </div>
              {/*                            <div className={styles.messageForm__downloadBox}>
                                <input type="file" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf"/>
                                <input type="file" accept="image/*"/>
                            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
