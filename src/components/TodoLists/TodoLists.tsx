import React, { FC } from 'react';

import styles from './styles/TodoLists.module.scss';

export const TodoLists: FC = () => {
  const title = 'To-do list';
  return (
    <>
      <span className={styles.todoLists__topLine} />
      <div className={styles.todoLists}>
        <h3 className={styles.todoLists__title}>{title}</h3>
        <div>
          <h5>Learn</h5>
          <ul className={styles.todoLists__list}>
            <li className={styles.todoLists__item}>One</li>
            <li className={styles.todoLists__item}>Two</li>
            <li className={styles.todoLists__item}>Three</li>
            <li className={styles.todoLists__item}>Four</li>
          </ul>
        </div>
      </div>
    </>
  );
};
