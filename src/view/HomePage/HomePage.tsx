import React, { FC, useState } from 'react';

import styles from './styles/HomePage.module.scss';

import { ProfileContainer, ModalWindow, Post } from 'components';
import { BoxNewPost } from 'components/BoxNewPost/BoxNewPost';

export const HomePage: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={styles.homePage}>
      <div className="container">
        <div
          className={
            active
              ? `${styles.homePage__wrapper} ${styles.active}`
              : styles.homePage__wrapper
          }
        >
          <div className={styles.homePage__left}>
            <ProfileContainer />
          </div>

          <div className={styles.homePage__center}>
            <BoxNewPost openModalNewPost={setActive} />
            <Post />
          </div>

          <div className={styles.homePage__right}> </div>
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive} />
    </div>
  );
};
