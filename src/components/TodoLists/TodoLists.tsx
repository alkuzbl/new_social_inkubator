import React, { FC } from 'react';

import styles from './styles/TodoLists.module.scss';

import { TasksType, TodoListsType } from 'bll/reducers/types';
import { Task } from 'components';
import { useAppSelector } from 'hooks';

export const TodoLists: FC = () => {
  const todoLists = useAppSelector<TodoListsType>(state => state.todoLists);
  const tasks = useAppSelector<TasksType>(state => state.tasks);

  return (
    <>
      <span className={styles.todoLists__topLine} />
      <div className={styles.todoLists}>
        <h3 className={styles.todoLists__title}>To-do list</h3>
        {todoLists.map(({ id, title }) => (
          <div key={id} className={styles.todoList}>
            <h5 className={styles.todoList__title}>{title}</h5>
            <ul className={styles.todoList__list}>
              {tasks[id].map(task => (
                <Task key={task.id} title={task.title} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
