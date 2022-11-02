import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";

// LocalStorage -> Redux Persist
const persistAuthConfig = {
  key: "auth",
  storage,
  whiteList: ["accessToken"],
};

// Aplicando LocalStorage de forma mas simple con Redux.
const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    ),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

// TYPES
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;

export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
