import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import userImg from '../../../assets/images/user.jpg';

import emailIcon from 'assets/images/icons/email-white.svg';
import { IconButton } from 'components';
import styles from 'view/ProfilesPage/ProfileCard/styles/ProfileCard.module.scss';

type ProfileCardPropsType = {
  size?: 'small';
};

export const ProfileCard: FC<ProfileCardPropsType> = props => {
  const { size } = props;

  const handleClickFollow = (): void => {
    console.log('Click - FOLLOW');
  };

  return (
    <div
      className={styles.profileCard}
      style={size && { maxWidth: '100%', boxShadow: 'none', margin: '0 10px' }}
    >
      <div
        className={styles.profileCard__wrapper}
        style={size && { padding: '15px 5px' }}
      >
        <div
          className={styles.profileCard__image}
          style={size && { width: '60px', height: '60px' }}
        >
          <img
            className={styles.profileCard__img}
            src={userImg}
            style={size && { width: '60px', height: '60px' }}
            alt="profile user"
          />
        </div>

        <h4 className={styles.profileCard__name} style={size && { fontSize: '16px' }}>
          John Jhon
        </h4>
        <p className={styles.profileCard__about} style={size && { fontSize: '14px' }}>
          Lorem ipsum dolor sit amet
        </p>
        <div
          className={styles.profileCard__links}
          style={size && { height: '25px', fontSize: '13px' }}
        >
          <button
            type="button"
            className={styles.profileCard__button}
            onClick={handleClickFollow}
          >
            Follow
          </button>
          <div className={styles.profileCard__messageBtn}>
            <IconButton icon={emailIcon} />
          </div>
        </div>
      </div>
      <Link
        to="/"
        className={styles.profileCard__link}
        style={size && { fontSize: '14px' }}
      >
        View Profile
      </Link>
    </div>
  );
};
