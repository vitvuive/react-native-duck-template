import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EReducerName } from '@/core/theme';

interface IVenue {
  id: number;
  name: string;
}

interface ICategory {}

interface ICategoryById {
  [venueId: string]: ICategory;
}

export interface IAuthState {
  isLoading: boolean;
  categoryById: ICategoryById;
  venueCurrent?: IVenue;
}

const initialState: IAuthState = {
  isLoading: false,
  categoryById: {},
};

export const venueSlice = createSlice({
  name: EReducerName.venue,
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setVenueCurrent(state, action: PayloadAction<IVenue>) {
      state.venueCurrent = action.payload;
    },
  },
});

export const signInAsync = createAction('auth/signInAsync');

export default venueSlice.reducer;
