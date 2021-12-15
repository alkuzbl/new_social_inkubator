import React from "react";
import {v1} from "uuid";
import {MenuLink} from "./MenuLink/MenuLink";
import home from './../../../assets/images/iconNavBar/iconHome.png'
import projects from './../../../assets/images/iconNavBar/iconProject.png'
import video from './../../../assets/images/iconNavBar/video.svg'
import profiles from './../../../assets/images/iconNavBar/iconProfiles.png'
import messages from './../../../assets/images/iconNavBar/iconMessages.png'
import notification from './../../../assets/images/iconNavBar/iconNotification.png'
import styles from './NavBar.module.scss'

const navBarMenu = [
    {id: v1(), title: "Home", path: "/home", icon: home, altAtr: 'home page'},
    {id: v1(), title: "Projects", path: "/projects", icon: projects, altAtr: 'projects page'},
    {id: v1(), title: "Video", path: "/video", icon: video, altAtr: 'video'},
    {id: v1(), title: "Profiles", path: "/profiles", icon: profiles, altAtr: 'profiles page'},
    {id: v1(), title: "Messages", path: "/messages", icon: messages, altAtr: 'messages page'},
    {id: v1(), title: "Notification", path: "/notification", icon: notification, altAtr: 'Notification page'},
]

export const NavBar = () => {

    return <div className={styles.navbar}>
        <ul className={styles.menu}>
            {
                navBarMenu.map(n => <li className={styles.menu__link}>
                    <MenuLink path={n.path} title={n.title} icon={n.icon} alt={n.altAtr}/>
                </li>)
            }
        </ul>
    </div>
}