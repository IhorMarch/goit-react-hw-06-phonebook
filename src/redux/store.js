
import { configureStore } from "@reduxjs/toolkit";
import { reducerContacts } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import { persistStore} from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);


export const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    filter: filtersReducer,
  },

   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

 export const persistor = persistStore(store)

