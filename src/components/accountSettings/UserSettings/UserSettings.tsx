import React from "react";
import styles from "./UserSetting.module.scss";
import {v1} from "uuid";
import {Link} from "react-router-dom";

const settingsMenu = [
    {id: v1(), title: "Account Setting", path: 'user-settings'},
    {id: v1(), title: "Privacy", path: 'privacy'},
    {id: v1(), title: "Account Setting", path: 'terms-conditions'}
]


type UserSettingsPropsType = {
    collapsed: boolean
    callBackOnClick: () => void
}
export const UserSettings = (props: UserSettingsPropsType) => {
    const {collapsed, callBackOnClick} = props

    const onClickHandler = () => {
        callBackOnClick()
    }

    const stylesCollapsedMenu = !collapsed ? `${styles.userSettings} ${styles.collapsed}` : styles.userSettings

    return <div className={stylesCollapsedMenu}>
        <div className={styles.userInfo__onlineStatus}>
            <h3 className={styles.userInfo__title}>
                Online Status
            </h3>
        </div>
        <div className={styles.userSettings__set}>
            <h3 className={styles.userInfo__title}>Settings</h3>
            <ul className={styles.userInfo__userSettingsItems}>
                {
                    settingsMenu.map(item => <li key={item.id} className={styles.userInfo__userSettingsItem}
                                                 onClick={onClickHandler}>
                        <Link to={item.path}>{item.title}</Link></li>)
                }
            </ul>
        </div>
        <h3 className={styles.userInfo__title} onClick={onClickHandler}><Link to="/">Logout</Link></h3>
    </div>
}