import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import userImg from '../../../assets/images/user.jpg';

import styles from 'view/ProfilesPage/ProfileCard/styles/ProfileCard.module.scss';

export const ProfileCard: FC = () => {
  const handleClickFollow = (): void => {
    console.log('Click - FOLLOW');
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCard__wrapper}>
        <div className={styles.profileCard__image}>
          <img className={styles.profileCard__img} src={userImg} alt="profile user" />
        </div>

        <h4 className={styles.profileCard__name}>John Jhon</h4>
        <p className={styles.profileCard__about}>Lorem ipsum dolor sit amet</p>
        <div className={styles.profileCard__links}>
          <button
            type="button"
            className={styles.profileCard__button}
            onClick={handleClickFollow}
          >
            Follow
          </button>
          <Link className={styles.profileCard__messageBtn} to="/">
            <span />
          </Link>
        </div>
      </div>
      <Link to="/" className={styles.profileCard__link}>
        View Profile
      </Link>
    </div>
  );
};
