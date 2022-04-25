import { StatusType } from 'types';

export type AppInitialStateType = {
  isAuth: boolean;
  isInitialized: boolean;
  status: StatusType;
};

export type TaskType = { id: string; todoListId: string; title: string; isDone: boolean };
export type TasksType = { [key: string]: TaskType[] };
export type TodoListType = { id: string; title: string; collapsed: boolean };
export type TodoListsType = TodoListType[];
