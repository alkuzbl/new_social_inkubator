import { configureStore } from '@reduxjs/toolkit';

import { appReducer, tasksReducer, todoListReducer } from 'bll/reducers';

export const store = configureStore({
  reducer: {
    app: appReducer,
    todoLists: todoListReducer,
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
