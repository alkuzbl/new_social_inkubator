import { createSlice } from '@reduxjs/toolkit';

import { TodoListsType } from 'bll/reducers/types';

const todoListsInitialState: TodoListsType = [
  { id: '1', title: 'Learn', collapsed: true },
  { id: '2', title: 'Learn 2', collapsed: true },
];

const TODOLIST = 'todoList';

const todoListsSlice = createSlice({
  name: TODOLIST,
  initialState: todoListsInitialState,
  reducers: {},
});

export const todoListReducer = todoListsSlice.reducer;
