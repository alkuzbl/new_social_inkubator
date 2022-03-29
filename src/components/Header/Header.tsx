import React, { FC, useState } from 'react';

import logo from '../../assets/images/logoWhite.png';

import { NavBar } from './NavBar/NavBar';
import { UserInfo } from './UserInfo/UserInfo';

import { Messages, UserSettings, SearchInput } from 'components';
import styles from 'components/Header/styles/Header.module.scss';

export const Header: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [collapsedMessage, setCollapsedMessage] = useState<boolean>(true);

  const collapsedSettingsMenu = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__searchContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            <SearchInput />
          </div>
          <NavBar
            setCollapsedMessage={setCollapsedMessage}
            collapsedMessage={collapsedMessage}
          />
          <UserSettings collapsed={collapsed} callBackOnClick={collapsedSettingsMenu} />
          <UserInfo callBackOnClick={collapsedSettingsMenu} />
        </div>
      </div>

      <Messages
        collapsedMessage={collapsedMessage}
        setCollapsedMessage={setCollapsedMessage}
      />
    </header>
  );
};
