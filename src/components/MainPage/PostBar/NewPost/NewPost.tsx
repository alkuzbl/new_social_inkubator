import React, {ChangeEvent, useState} from "react";
import {Button} from "../../../common/Button";

import styles from './NewPost.module.scss'
import './Modal.scss'

export type InputChangeEventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

type NewPostPropsType = {
    setActive: (active: boolean) => void
}
export const NewPost = (props: NewPostPropsType) => {
const {setActive} = props

    const [titleValue, setTitleValue] = useState<string>('')
    const [newPostValue, setNewPostValue] = useState<string>('')

    const onChangeInputFormHandler = (e: InputChangeEventType) => {
        switch (e.currentTarget.name) {
            case 'title':
                setTitleValue(e.currentTarget.value)
                break
            case 'post':
                setNewPostValue(e.currentTarget.value)
                break
        }
    };
    const onSubmitHandler = () => {
        if(titleValue && newPostValue){
            console.log({title: titleValue, post: newPostValue})
            setTitleValue('')
            setNewPostValue('')
        }
    };

    const resetValuePost = () => {
        setTitleValue('')
        setNewPostValue('')
        setActive(false)
    }

    return <div className={styles.newPost} onClick={(e)=>{e.stopPropagation()}}>
        <div className={styles.newPost__title}>
            <h3>
                NewPost
            </h3>
        </div>
        <div className={styles.newPost__form}>
            <input className={styles.newPost__formInput} type="text" onChange={onChangeInputFormHandler} name="title" value={titleValue} autoFocus/>
            <textarea className={styles.newPost__formTextarea} onChange={onChangeInputFormHandler} name="post" value={newPostValue} autoFocus/>
            <div className={styles.newPost__formInner}>
                <Button customClassName={styles.newPost__formSubmit} title="Post" callBack={onSubmitHandler} customStyle={"default"}/>
                <Button title="Cancel" callBack={resetValuePost} customStyle={"transparent"}/>
            </div>
        </div>
    </div>
}

type ModalWindowPropsType = {
    active: boolean
    setActive: (active: boolean)=>void
}

export const ModalWindow = (props: ModalWindowPropsType)=>{
    const {active, setActive} = props

    return <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)} >
        <NewPost setActive={setActive} />
    </div>
}