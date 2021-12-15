import React, {ChangeEvent, useState} from "react";

import styles from './SearchInput.module.scss'

export const SearchInput = () => {

    const [value, setValue] = useState<string>('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    const onClickHandler = () => {
        setValue('')
    }
    return <div className={styles.search}>
        <input className={styles.search__input} type="text" onChange={onChangeValue} value={value}/>
        <button className={styles.search__btn} onClick={onClickHandler}></button>
    </div>
}