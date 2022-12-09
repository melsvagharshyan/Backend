import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsData from './Slices/getProductsSlice';


export const store = configureStore({
  reducer: {
    productsData
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
