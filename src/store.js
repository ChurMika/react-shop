import { createStore, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import stateReducer from './Components/reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = stateReducer

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store)