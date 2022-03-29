import React, { FC } from 'react';

import { ProfileCard } from './ProfileCard';

import { Spinner } from 'components';
import styles from 'view/ProfilesPage/styles/Profiles.module.scss';

export const Profiles: FC = () => (
  <div className={styles.profiles}>
    <div className="container">
      <div className={styles.profiles__wrapper}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <Spinner />
    </div>
  </div>
);
