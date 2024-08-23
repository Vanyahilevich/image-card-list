// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './features/posts/posts-slice';
import { postApi } from './services/post-api';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
