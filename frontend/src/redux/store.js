import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure the persistReducer with persistConfig
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Create a persisted reducer using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Set up the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // Directly pass persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for persistence
    }),
});

// Create the persistor
export const persistor = persistStore(store);
