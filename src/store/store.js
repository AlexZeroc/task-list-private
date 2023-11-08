import { TasksApi } from './TasksApi';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [TasksApi.reducerPath]: TasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TasksApi.middleware),
});

setupListeners(store.dispatch);
