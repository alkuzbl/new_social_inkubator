import React, {useState} from "react";
import styles from './HomePage.module.scss'
import {IconUser} from "../../components/IconUser/IconUser";
import user from './../../assets/images/user.jpg'
import {ModalWindow} from "../../components/MainPage/PostBar/NewPost/NewPost";
import {ProfileContainer} from "../../components/ProfileContainer/ProfileContainer";

export const HomePage = () => {

    const [active, setActive] = useState<boolean>(false)

    const addPostHandler = () => {
      setActive(true)
    }

    return <div className={styles.homePage}>
        <div className="container">
            <div className={active ? `${styles.homePage__wrapper} ${styles.active}` :  styles.homePage__wrapper}>
                <div className={styles.homePage__left}>

                <ProfileContainer/>



                </div>
                <div className={styles.homePage__center}>
                    <span className={styles.homePage__centerTopLine}></span>
                    <div className={styles.homePage__newPost}>
                        <div className={styles.homePage__newPostIconUser}>
                            <IconUser user={user}/>
                        </div>
                        <button className={styles.homePage__newPostBtn} onClick={addPostHandler}>New Post</button>
                    </div>
                </div>
                <div className={styles.homePage__right}> </div>
            </div>
        </div>
        <ModalWindow active={active} setActive={setActive}/>
    </div>
}
