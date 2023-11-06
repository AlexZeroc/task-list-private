import { TasksServerApi } from './TasksServerApi';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [TasksServerApi.reducerPath]: TasksServerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TasksServerApi.middleware),
});

setupListeners(store.dispatch);
