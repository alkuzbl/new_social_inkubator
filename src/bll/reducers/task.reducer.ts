import { createSlice } from '@reduxjs/toolkit';

import { TasksType } from 'bll/reducers/types';

const tasksInitialState: TasksType = {
  '1': [
    { id: 'sdsds', todoListId: '1', title: 'ncklldsk', isDone: false },
    { id: 'ssd', todoListId: '1', title: 'test2', isDone: false },
    { id: 'sdfsd', todoListId: '1', title: 'test2', isDone: false },
  ],
  '2': [
    { id: 'sdfs', todoListId: '2', title: 'ncklldsk', isDone: false },
    { id: 'sszxcvd', todoListId: '2', title: 'test2', isDone: false },
    { id: 'xvz', todoListId: '2', title: 'test2', isDone: false },
  ],
};

const TASKS = 'tasks';

const tasksSlice = createSlice({
  name: TASKS,
  initialState: tasksInitialState,
  reducers: {},
});

export const tasksReducer = tasksSlice.reducer;
