import React, {useState} from "react";
import styles from './Header.module.scss'
import logo from './../../assets/images/logoWhite.png'
import {SearchInput} from "../common/SearchInput/SearchInput";
import {UserInfo} from "./UserInfo/UserInfo";
import {UserSettings} from "../accountSettings/UserSettings/UserSettings";
import {NavBar} from "./NavBar/NavBar";

export const Header = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapsedSettingsMenu = () => {
        setCollapsed(!collapsed)
    }

    return <header className={styles.header}>
        <div className='container'>
            <div className={styles.header__wrapper}>
                <div className={styles.header__searchContainer}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <SearchInput/>
                </div>
                <NavBar/>
                <UserSettings collapsed={collapsed} callBackOnClick={collapsedSettingsMenu}/>
                <UserInfo callBackOnClick={collapsedSettingsMenu}/>
            </div>
        </div>
    </header>
}