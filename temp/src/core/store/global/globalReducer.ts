import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EReducerName } from '@/core/theme';

export interface IGlobalState {
  isIntroLoaded: boolean;
  isLogin: boolean;
}

const initialState: IGlobalState = {
  isIntroLoaded: false,
  isLogin: false,
};

export const globalSlice = createSlice({
  name: EReducerName.global,
  initialState,
  reducers: {
    setIntroLoaded: (state, action: PayloadAction<boolean>) => {
      state.isIntroLoaded = action.payload;
    },
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export default globalSlice.reducer;
