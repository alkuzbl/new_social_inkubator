import React, { FC } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import styles from './styles/LoginPage.module.scss';

import backgroundImg from 'assets/images/login-background_img.png';
import logo from 'assets/images/logo.png';

const setActiveStyle = (isActive: boolean): any => {
  if (isActive) {
    return { color: '#FFFFFF', backgroundColor: '#e44D3A' };
  }
  return {};
};

export const LoginPage: FC = () => (
  <div className={styles.loginPage}>
    <div className={styles.loginPage__wrapper}>
      <div className={styles.loginPage__row}>
        <div className={styles.loginPage__logo}>
          <img src={logo} alt="logo" />
        </div>

        <p className={styles.loginPage__content}>
          IT-Incubator is a global learning platform and social network where students and
          professionals communicate and collaborate remotely
        </p>

        <div className={styles.loginPage__background}>
          <img src={backgroundImg} alt="background" />
        </div>
      </div>

      <div className={styles.loginPage__row}>
        <div className={styles.loginPage__boxForm}>
          <NavLink
            className={styles.loginPage__authButton}
            style={({ isActive }) => setActiveStyle(isActive)}
            to="/login"
          >
            SignIn
          </NavLink>

          <NavLink
            className={styles.loginPage__authButton}
            style={({ isActive }) => setActiveStyle(isActive)}
            to="/registration"
          >
            SignUp
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
    <div className={styles.footer}>Footer</div>
  </div>
);
