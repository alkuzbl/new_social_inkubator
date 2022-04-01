import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { FormForLogin } from 'components/FormForLogin';
import styles from 'view/LoginPage/styles/LoginPage.module.scss';

export const Login: FC = () => (
  <div className={styles.loginPage__boxFormInner}>
    <FormForLogin />

    <div className={styles.loginPage__socialLinkItems}>
      <h3 className={styles.loginPage__socialLinkItemsTitle}>LOGIN VIA SOCIAL ACCOUNT</h3>
      <Link className={styles.loginPage__socialLinkItem} to="/">
        Facebook
      </Link>
      <Link className={styles.loginPage__socialLinkItem} to="/">
        linkedin
      </Link>
    </div>
  </div>
);
