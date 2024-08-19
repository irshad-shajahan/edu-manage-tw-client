import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './features/api/apiSlice';
import { userSlice } from './features/userSlice';
import { loaderSlice } from './features/loaderSlicer';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alerts: loaderSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
  return  getDefaultMiddleware().concat(apiSlice.middleware);
  },
});


setupListeners(store.dispatch)