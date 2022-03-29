import React from "react";
import {IconUser} from "../IconUser/IconUser";
import user from "../../assets/images/user.jpg";
import styles from './styles/ProfileContainer.module.scss'
import {Link} from "react-router-dom";

export const ProfileContainer = () => {

    return (<div className={styles.profileContainer}>
        <div className={styles.profileContainer__top}>
            <div className={styles.profileContainer__iconBox}>
                <IconUser user={user} size={100}/>
            </div>
        </div>
        <div className={styles.profileContainer__inner}>
            <h3 className={styles.profileContainer__title}>John Doe</h3>
            <h5 className={styles.profileContainer__subtitle}>FrontEnd developer</h5>
        </div>

        <div className={styles.profileContainer__infoBox}>
            <p className={styles.profileContainer__infoBoxTitle}>Following</p>
            <span>34</span>
        </div>
        <div className={styles.profileContainer__infoBox}>
            <p className={styles.profileContainer__infoBoxTitle}>Followers</p>
            <span>120</span>
        </div>
        <div className={styles.profileContainer__bottom}>
            <Link to={'/profile'} className={styles.profileContainer__bottomLink}>View Profile</Link>
        </div>

    </div>)
}
