// store.js (or redux/store.js)
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // This stores data in localStorage

import userReducer from "./state"; // Importing the userSlice reducer directly

const persistConfig = {
  key: "root", // the key for the persisted state
  version: 1,
  storage, // using localStorage for persistence
};

const persistedReducer = persistReducer(persistConfig, userReducer); // Applying persistence to the userReducer

export const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore persist-related actions
      },
    }),
});

export let persistor = persistStore(store); // Exporting the persistor
