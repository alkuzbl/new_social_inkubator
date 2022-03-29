import React, { FC } from 'react';

import { v1 } from 'uuid';

import home from '../../../assets/images/iconNavBar/iconHome.png';
import messages from '../../../assets/images/iconNavBar/iconMessages.png';
import notification from '../../../assets/images/iconNavBar/iconNotification.png';
import profiles from '../../../assets/images/iconNavBar/iconProfiles.png';
import projects from '../../../assets/images/iconNavBar/iconProject.png';
import video from '../../../assets/images/iconNavBar/video.svg';
import { MenuLink } from '../MenuLink/MenuLink';

import styles from 'components/Header/NavBar/styles/NavBar.module.scss';

const navBarMenu = [
  {
    id: v1(),
    name: 'home',
    title: 'Home',
    path: '/home',
    icon: home,
    altAtr: 'home page',
  },
  {
    id: v1(),
    name: 'projects',
    title: 'Projects',
    path: '/projects',
    icon: projects,
    altAtr: 'projects page',
  },
  {
    id: v1(),
    name: 'video',
    title: 'Video',
    path: '/video',
    icon: video,
    altAtr: 'video',
  },
  {
    id: v1(),
    name: 'profiles',
    title: 'Profiles',
    path: '/profiles',
    icon: profiles,
    altAtr: 'profiles page',
  },
  {
    id: v1(),
    name: 'messages',
    title: 'Messages',
    path: '',
    icon: messages,
    altAtr: 'messages page',
  },
  {
    id: v1(),
    name: 'messages',
    title: 'New post',
    path: '/posts',
    icon: messages,
    altAtr: 'posts',
  },
  {
    id: v1(),
    name: 'notification',
    title: 'Notification',
    path: '/notification',
    icon: notification,
    altAtr: 'Notification page',
  },
];

type NavBarPropsType = {
  setCollapsedMessage: (active: boolean) => void;
  collapsedMessage: boolean;
};

export const NavBar: FC<NavBarPropsType> = props => {
  const { setCollapsedMessage, collapsedMessage } = props;

  const handleClickMenuItem = (itemName: string): void => {
    if (itemName === 'Messages') {
      setCollapsedMessage(!collapsedMessage);
    }
  };

  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        {navBarMenu.map(n => (
          <li
            role="presentation"
            key={n.id}
            className={styles.menu__link}
            onClick={() => handleClickMenuItem(n.title)}
          >
            <MenuLink path={n.path} title={n.title} icon={n.icon} alt={n.altAtr} />
          </li>
        ))}
      </ul>
    </div>
  );
};
