import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { messengerApi } from './shared/api/messenger.api'

export const messengerStore = configureStore({
  reducer: {
    [messengerApi.reducerPath]: messengerApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(messengerApi.middleware),
})

setupListeners(messengerStore.dispatch)
