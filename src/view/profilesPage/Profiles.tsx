import React from "react";
import styles from './Profiles.module.scss'
import {ProfileCard} from "./ProfileCard/ProfileCard";
import {Spinner} from "../../components/common/Spinner/Spinner";
export const Profiles = () => {

    return <div className={styles.profiles}>
        <div className='container'>
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
            <Spinner/>
        </div>
    </div>
}