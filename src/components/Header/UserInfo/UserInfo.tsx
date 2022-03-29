import React, { FC } from 'react';

import user from '../../../assets/images/user.jpg';

import styles from 'components/Header/UserInfo/styles/UserInfo.module.scss';

type UserInfoPropsType = {
  callBackOnClick: () => void;
};
export const UserInfo: FC<UserInfoPropsType> = props => {
  const { callBackOnClick } = props;

  const handleClick = (): void => {
    callBackOnClick();
  };

  return (
    <div className={styles.userInfo}>
      <img src={user} alt="user" />
      <div
        role="presentation"
        className={styles.userInfo__userWrapper}
        onClick={handleClick}
      >
        <div className={styles.userInfo__userName}>
          <span> Sasha </span>
        </div>
      </div>
    </div>
  );
};
