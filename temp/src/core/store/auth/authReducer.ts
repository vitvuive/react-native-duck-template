import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponseLogin } from '@/core/api/auth';
import { EReducerName } from '@/core/theme';

export interface IAuthState {
  isLoading: boolean;
  user: IResponseLogin;
}

const initialState: IAuthState = {
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: EReducerName.auth,
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserData(state, action: PayloadAction<IResponseLogin | null>) {
      state.user = action.payload;
    },
  },
});

export const signInAsync = createAction('auth/signInAsync');

export default authSlice.reducer;
