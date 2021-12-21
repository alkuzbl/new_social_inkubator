import React, {useState} from "react";
import styles from './Header.module.scss'
import logo from './../../assets/images/logoWhite.png'
import {SearchInput} from "../common/SearchInput/SearchInput";
import {UserInfo} from "./UserInfo/UserInfo";
import {UserSettings} from "../accountSettings/UserSettings/UserSettings";
import {NavBar} from "./NavBar/NavBar";
import {ModalWindow} from "../MainPage/PostBar/NewPost/NewPost";
import {Messages} from "../Messages/Messages";

export const Header = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [active, setActive] = useState<boolean>(false)
    const [collapsedMessage, setCollapsedMessage] = useState<boolean>(true)

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
                <NavBar setActive={setActive}
                        setCollapsedMessage={setCollapsedMessage}
                        collapsedMessage={collapsedMessage}
                />
                <UserSettings collapsed={collapsed} callBackOnClick={collapsedSettingsMenu}/>
                <UserInfo callBackOnClick={collapsedSettingsMenu}/>
            </div>
        </div>
        <ModalWindow active={active} setActive={setActive}/>
        <Messages collapsedMessage={collapsedMessage} setCollapsedMessage={setCollapsedMessage}/>

    </header>
}