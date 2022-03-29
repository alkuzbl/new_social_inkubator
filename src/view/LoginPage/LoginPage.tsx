import React, { FC } from 'react';

import styles from './styles/LoginPage.module.scss';

import backgroundImg from 'assets/images/login-background_img.png';
import logo from 'assets/images/logo.png';

export const LoginPage: FC = () => {
  const signUp = (): void => {
    console.log('click - SignUp');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__wrapper}>
        <div className={styles.loginPage__row}>
          <div className={styles.loginPage__logo}>
            <img src={logo} alt="logo" />
          </div>
          <p className={styles.loginPage__content}>
            IT-Incubator is a global learning platform and social network where students
            and professionals communicate and collaborate remotely
          </p>
          <div className={styles.loginPage__background}>
            <img src={backgroundImg} alt="background" />
          </div>
        </div>
        <div className={styles.loginPage__row}>
          <button type="submit" onClick={signUp}>
            +
          </button>
        </div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
