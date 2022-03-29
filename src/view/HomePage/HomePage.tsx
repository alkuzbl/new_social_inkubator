import React, { FC, useState } from 'react';

import styles from './styles/HomePage.module.scss';

import user from 'assets/images/user.jpg';
import { IconUser, ProfileContainer, ModalWindow } from 'components';

export const HomePage: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const addPostHandler = (): void => {
    setActive(true);
  };

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
            <span className={styles.homePage__centerTopLine} />
            <div className={styles.homePage__newPost}>
              <div className={styles.homePage__newPostIconUser}>
                <IconUser user={user} />
              </div>
              <button
                type="button"
                className={styles.homePage__newPostBtn}
                onClick={addPostHandler}
              >
                New Post
              </button>
            </div>
          </div>
          <div className={styles.homePage__right}> </div>
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive} />
    </div>
  );
};
