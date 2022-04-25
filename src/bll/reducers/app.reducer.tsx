import { createSlice } from '@reduxjs/toolkit';

import { AppInitialStateType } from 'bll/reducers/types';

const appInitialState: AppInitialStateType = {
  isAuth: true,
  isInitialized: true,
  status: 'idle',
};

const APP = 'app';

const appSlice = createSlice({
  name: APP,
  initialState: appInitialState,
  reducers: {},
});

export const appReducer = appSlice.reducer;
