import React, { ChangeEvent, FC, useState } from 'react';

import { Button } from 'components/common/Button/Button';
import styles from 'components/PostBar/NewPost/styles/NewPost.module.scss';

import 'components/ModalWindow/styles/Modal.scss';

export type InputChangeEventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

type NewPostPropsType = {
  setActive: (active: boolean) => void;
};
export const NewPost: FC<NewPostPropsType> = props => {
  const { setActive } = props;

  const [titleValue, setTitleValue] = useState<string>('');
  const [newPostValue, setNewPostValue] = useState<string>('');

  const onChangeInputFormHandler = (e: InputChangeEventType): void => {
    switch (e.currentTarget.name) {
      case 'title':
        setTitleValue(e.currentTarget.value);
        break;
      case 'post':
        setNewPostValue(e.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const onSubmitHandler = (): void => {
    if (titleValue && newPostValue) {
      console.log({ title: titleValue, post: newPostValue });
      setTitleValue('');
      setNewPostValue('');
    }
  };

  const resetValuePost = (): void => {
    setTitleValue('');
    setNewPostValue('');
    setActive(false);
  };

  return (
    <div
      role="presentation"
      className={styles.newPost}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div className={styles.newPost__title}>
        <h3>NewPost</h3>
      </div>
      <div className={styles.newPost__form}>
        <input
          className={styles.newPost__formInput}
          type="text"
          onChange={onChangeInputFormHandler}
          name="title"
          value={titleValue}
        />
        <textarea
          className={styles.newPost__formTextarea}
          onChange={onChangeInputFormHandler}
          name="post"
          value={newPostValue}
        />
        <div className={styles.newPost__formInner}>
          <Button
            customClassName={styles.newPost__formSubmit}
            title="Post"
            callBack={onSubmitHandler}
            customStyle="default"
          />
          <Button title="Cancel" callBack={resetValuePost} customStyle="transparent" />
        </div>
      </div>
    </div>
  );
};
