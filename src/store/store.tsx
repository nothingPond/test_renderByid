import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slice/counter';

const store = configureStore({
  reducer: {
    counter: counterSlice, // รวม reducer
  },
});

// กำหนด RootState และ AppDispatch เพื่อให้ TypeScript รู้จักประเภทของ state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;